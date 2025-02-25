import Login from "./pages/Login";
import './index.css';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
function App() {
return(
  <Router>
    <Routes>
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='*' element={<Login />} />
    </Routes>
  </Router>
)
};

export default App