import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from '../styles/mapPage.style';
import KakaoMap from './KaKaoMap';
import AddressInfoBox from './AddressInfoBox';
import { MAP_INFO_LABEL, BASE_ADDRESS, CLOSE_BUTTON } from '../constants/map.constant';
import { getKeywordToObject } from '../utils/getKeywordToObject';
import type { TransformedKakaoPlace } from '../types/kakao';
import PlaceButton from './PlaceButton';
import SearchOnMapContainer from './SearchOnMapContainer';

const MapPage: React.FC = () => {
  const location = useLocation();
  const initialSearchValue = location.state?.searchValue;

  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const [addressDataList, setAddressData] = useState<TransformedKakaoPlace[] | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<TransformedKakaoPlace | null>(null);
  const [isShowAddressPart, setIsShowAddressPart] = useState<boolean>(true);

  useEffect(() => {
    if (!searchValue) return;

    async function fetchData() {
      const result = await getKeywordToObject(searchValue);
      if (result) {
        setAddressData(result);
      } else {
        alert('검색 결과가 없습니다.');
      }
    }

    fetchData();
  }, [searchValue]);

  const handleClickToSetSelectedAddress = (addressData: TransformedKakaoPlace): void => {
    if (!addressData) return;
    setSelectedAddress(addressData);
    setIsShowAddressPart(true);
  };

  const handleClickCloseButton = () => {
    setIsShowAddressPart(false);
  };

  return (
    <S.MapPageContainer>
      <S.Header>
        <SearchOnMapContainer searchValue={searchValue} setSearchValue={setSearchValue} />
        <S.SearchText>{searchValue}</S.SearchText>
      </S.Header>
      <S.MapContainer>
        {addressDataList && (
          <KakaoMap
            placeData={addressDataList}
            center={
              selectedAddress
                ? {
                    lat: parseFloat(selectedAddress.y),
                    lng: parseFloat(selectedAddress.x),
                  }
                : {
                    lat: BASE_ADDRESS.BASE_LAT,
                    lng: BASE_ADDRESS.BASE_LNG,
                  }
            }
            onMarkerClick={handleClickToSetSelectedAddress}
          />
        )}
        <S.PlaceBackground>
          <S.ColumnWrapper>
            {addressDataList && (
              <S.ScrollablePlaceListWrapper>
                {addressDataList.map((item) => (
                  <PlaceButton
                    key={item.id}
                    name={item.place_name}
                    address={item.address_name}
                    isSelected={selectedAddress?.id === item.id}
                    onClick={() => handleClickToSetSelectedAddress(item)}
                  ></PlaceButton>
                ))}
              </S.ScrollablePlaceListWrapper>
            )}
          </S.ColumnWrapper>
        </S.PlaceBackground>
        {isShowAddressPart && selectedAddress && (
          <S.AddressDataBackground>
            <S.CloseButtonContainer>
              <S.CloseButton onClick={handleClickCloseButton}>{CLOSE_BUTTON}</S.CloseButton>
            </S.CloseButtonContainer>
            <S.AddressPartColumnWrapper>
              <AddressInfoBox label={MAP_INFO_LABEL.POST_CODE} info={selectedAddress.postal_code} />
              <AddressInfoBox label={MAP_INFO_LABEL.LOT_NUMBER_ADDRESS} info={selectedAddress.address_name} />
              <AddressInfoBox label={MAP_INFO_LABEL.STREET_ADDRESS} info={selectedAddress.road_address_name} />
              <AddressInfoBox label={MAP_INFO_LABEL.ENGLISH_ADDRESS} info={selectedAddress.english_address} />
            </S.AddressPartColumnWrapper>
          </S.AddressDataBackground>
        )}
      </S.MapContainer>
    </S.MapPageContainer>
  );
};

export default MapPage;
