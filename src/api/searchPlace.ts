import type { KakaoPlace } from '../types/kakao';

export async function searchPlace(keyword: string): Promise<KakaoPlace[]> {
  if (!window.kakao) {
    throw new Error('Kakao SDK가 로드되지 않았습니다.');
  }
  return new Promise((resolve, reject) => {
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        resolve(data as KakaoPlace[]);
      } else {
        console.error('검색 실패:', status);
        reject(new Error('검색 실패'));
      }
    });
  });
}
