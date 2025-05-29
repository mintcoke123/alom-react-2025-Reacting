import { getEnglishAddressFromCoords } from '../api/getEnglishAddressFromCoords';    
import { getPostalCodeFromCoords } from '../api/getPostalCodeFromCoords';
import { getEnglishAddressToObject } from './getEnglishAddressToObject';
import type { KakaoPlace, TransformedKakaoPlace } from '../types/kakao';

export async function transformAddressData(addressData: (KakaoPlace)[]): Promise<(TransformedKakaoPlace)[]> {
  const transformedData = await Promise.all(addressData.map(async (place: (KakaoPlace)) => {
    const englishAddress: (string) = await getEnglishAddressFromCoords(place.y, place.x);
    const postalCode: (string | null) = await getPostalCodeFromCoords(place.y, place.x);
    const englishAddressObject = getEnglishAddressToObject(englishAddress);

    return {
      id: place.id,
      postal_code: postalCode,
      address_name: place.address_name,
      road_address_name: place.road_address_name,
      place_name: place.place_name,
      x: place.x,
      y: place.y,
      english_address: englishAddressObject,
    };
  }));

  return transformedData as TransformedKakaoPlace[];
}