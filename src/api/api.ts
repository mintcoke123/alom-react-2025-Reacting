export async function searchAddress(keyword: string) {
  const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(keyword)}`;
  const headers = {
    Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
  };

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data.documents;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
