import { Map, CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import type { TransformedKakaoPlace } from '../types/kakao';
import * as S from '../styles/mapPage.style';
import { BASE_ADDRESS } from '../constants/map.constant';

type KakaoMapProps = {
  placeData: TransformedKakaoPlace[];
  center: { lat: number; lng: number };
  onMarkerClick: (marker: TransformedKakaoPlace) => void;
};

const KakaoMap: React.FC<KakaoMapProps> = ({ placeData, center, onMarkerClick }) => {
  return (
    <Map center={center} style={{ width: '100%', height: '100%' }} level={3}>
      {placeData.map((marker) => {
        const lat = typeof marker.y === 'string' ? parseFloat(marker.y) : marker.y;
        const lng = typeof marker.x === 'string' ? parseFloat(marker.x) : marker.x;
        return (
          <MapMarker key={marker.id} position={{ lat, lng }} clickable={true} onClick={() => onMarkerClick(marker)} />
        );
      })}
    </Map>
  );
};

export default KakaoMap;
