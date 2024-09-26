import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PC from './pages/PC';
import Accessories from './pages/Accessories';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pc" element={<PC />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
