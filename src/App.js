import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
//import Dashboard from './components/Dashboard/dashboard.component';
//import LandingPage from './components/Dashboard/landing.component';
//import LandingPageComponent from './components/Landing/LandingPage.component';
//import AboutPageComponent from './components/Landing/about.component';
import WelcomeComponent from 'components/home/welcome.component';
import RegisterComponent from 'components/admin/register.component';
import LoginComponent from 'components/admin/login.component';



function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<WelcomeComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        {/* <Route path="/about" element={<AboutPageComponent />} /> */}
        </Routes>
    </div>
  );
}

export default App;
