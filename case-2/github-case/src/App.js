import { Routes, Route } from "react-router-dom";
import { Home, Historic } from './pages'

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/:username`} element={<Home />} />
      <Route path="historic" element={<Historic />} />
    </Routes>
  );
}

export default App;
