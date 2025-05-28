export interface KakaoAddressResult {
  road_address: {
    address_name: string;
    address_name_en: string;
  } | null;
  address: {
    address_name: string;
    address_name_en: string;
  };
}

export async function getEnglishAddressFromCoords(lat: number, lng: number): Promise<string> {
  if (!window.kakao) {
    throw new Error('Kakao SDK가 로드되지 않았습니다.');
  }

  return new Promise((resolve, reject) => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.coord2Address(lng, lat, (result: KakaoAddressResult[], status: string) => {
      if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
        const addressInfo = result[0].road_address ?? result[0].address;
        if (addressInfo?.address_name_en) {
          resolve(addressInfo.address_name_en);
        } else {
          reject(new Error('영문 주소를 찾을 수 없습니다.'));
        }
      } else {
        reject(new Error('주소 변환 실패'));
      }
    });
  });
}
