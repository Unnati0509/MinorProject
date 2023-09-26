import Layout from './Components/Layout/Layout';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/User/Login';
import Signup from './Components/User/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
