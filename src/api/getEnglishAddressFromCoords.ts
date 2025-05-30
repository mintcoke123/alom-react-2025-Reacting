export async function getEnglishAddressFromCoords(lat: string, lng: string): Promise<string> {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${import.meta.env.VITE_GOOGLE_API_KEY}&language=en`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.results.length > 0) {
      return data.results[0].formatted_address;
    } else if (data.status === 'ZERO_RESULTS') {
      throw new Error('검색 결과가 없습니다.');
    } else if (data.error_message) {
      throw new Error(`API 오류: ${data.error_message}`);
    } else {
      throw new Error(`알 수 없는 오류 (상태: ${data.status})`);
    }
  } catch (error: any) {
    console.error(error);
    throw new Error('주소 변환 실패: ' + (error.message ?? '원인 불명'));
  }
}