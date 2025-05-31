import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import MapPage from './components/MapPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/mapPage" element={<MapPage />} />
      </Routes>
    </Router>
  )
}

export default App
