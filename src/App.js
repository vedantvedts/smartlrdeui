import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
//import Dashboard from './components/Dashboard/dashboard.component';
//import LandingPage from './components/Dashboard/landing.component';
//import LandingPageComponent from './components/Landing/LandingPage.component';
//import AboutPageComponent from './components/Landing/about.component';
import WelcomeComponent from 'components/home/welcome.component';
import AboutUsComponent from 'components/admin/about.form.component';
import RegisterFormComponent from 'components/admin/register.form.component';
import LoginFormComponent from 'components/admin/login.form.component';
import ForgotPasswordComponent from 'components/admin/forgot.password.component';
import ContactFormComponent from 'components/admin/contact.form.component';


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<WelcomeComponent />} />
        <Route path="/aboutus" element={<AboutUsComponent />} />
        <Route path="/register" element={<RegisterFormComponent />} />
        <Route path="/login" element={<LoginFormComponent />} />
        <Route path="/forgot-password" element={<ForgotPasswordComponent />} />
        <Route path="/contact" element={<ContactFormComponent />} />
       
        {/* <Route path="/about" element={<AboutPageComponent />} /> */}
        </Routes>
    </div>
  );
}

export default App;
