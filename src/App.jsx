import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddProject from './pages/AddProject';
// import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/add-project" element={<AddProject />} /> */}
      <Route path="/indianoil" element={<Dashboard />} />
    </Routes>
  );
}

export default App;