import { useLocation } from 'react-router-dom';
import KakaoMap from '../components/KaKaoMap';

function MapPage() {
  const location = useLocation();
  const { searchValue } = location.state || {};

  return (
    <div>
      <h1>검색어: {searchValue}</h1>
      <KakaoMap />
    </div>
  );
}

export default MapPage; 