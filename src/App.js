import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import ScrollToTop from './ScrollTop'; // Import the scroll fix

import WelcomeComponent from 'components/home/welcome.component';
import AboutUsComponent from 'components/home/about.form.component';
import RegisterFormComponent from 'components/home/register.form.component';
import LoginFormComponent from 'components/home/login.form.component';
import ForgotPasswordComponent from 'components/home/forgot.password.component';
import ContactFormComponent from 'components/home/contact.form.component';
import SmartDashboardComponent from 'components/dashboard/smart.dashboard.component';
import ChangePasswordComponent from 'components/dashboard/change.password.component'
import RazorpayCheckout from 'components/payment/RazorpayCheckout';

function App() {
  return (
    <div className="App">
      <ScrollToTop />  {/* Ensures scroll resets on navigation */}
        <Routes>
        <Route path="/" element={<WelcomeComponent />} />
        <Route path="/aboutus" element={<AboutUsComponent />} />
        <Route path="/register" element={<RegisterFormComponent />} />
        <Route path="/login" element={<LoginFormComponent />} />
        <Route path="/forgot-password" element={<ForgotPasswordComponent />} />
        <Route path="/contact" element={<ContactFormComponent />} />

        <Route path="/membership" element={<ContactFormComponent />} />
        <Route path="/dashboard" element={<SmartDashboardComponent />} />
        <Route path="/change-password" element={<ChangePasswordComponent />} />
        <Route path="/payment" element={<RazorpayCheckout />} />

        

       
        {/* <Route path="/about" element={<AboutPageComponent />} /> */}
        </Routes>
    </div>
  );
}

export default App;
