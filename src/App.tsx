import { searchKrAddress } from './utils/SearchKrAddress';
import KakaoMap from './utils/KaKaoMap';
function App() {
  async function testSearch() {
    const result = await searchKrAddress('이태원 맛집');
    console.log('테스트 결과:', result);
  }

  testSearch();
  return (
    <>
      <KakaoMap />
    </>
  );
}

export default App;
