import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import MapPage from './components/MapPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/mapPage" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
