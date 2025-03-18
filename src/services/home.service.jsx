import axios from 'axios';
import config from '../environment/config';
const API_URL = config.API_URL;


export class UserDto {
    constructor(loginId, userName, password,name,email,phone,role) {
        this.loginId = loginId;
        this.userName = userName;
        this.password = password;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
      }
}

export const submitRegisterAdd = async (userDto) => {
    try {
      const response = await axios.post(
        `${API_URL}registerUser`,
        userDto,
        // { headers: authHeader() }//authHeader or token is not required 
      );
      return response.data;
    } catch (error) {
      console.error('Error occurred in submitRegisterAdd:', error);
      throw error;
    }
  };

  // Function to handle forgot password otpgeneration
export const sendOtp = async (emailId) => {
  try {
   
    const formData = new FormData();
    formData.append("email", emailId.trim());

    const response = await axios.post(`${API_URL}sendOtp`,
      formData,
      // { headers: authHeader() }//authHeader or token is not required 
  );

    return response.data;
  } catch (error) {
    console.error('Error occurred in sendOtp:', error);
    throw error;
  }


};


export const verifyOtp = async (emailId,OtpEntered) => {
  try {
   
    const formData = new FormData();
    formData.append("emailValue", emailId.trim());
    formData.append("OtpEntered", OtpEntered.trim());

    const response = await axios.post(`${API_URL}validateOtp`,
      formData,
      // { headers: authHeader() }//authHeader or token is not required
  );

    return response.data;
  } catch (error) {
    console.error('Error occurred in validateOtp:', error);
    throw error;
  }


};


export const submitResetPassword = async (email,newPassword) => {
  try {
    console.log('emai;l'+email);
    console.log('newPassword;l'+newPassword);
    const response = await axios.put(
      `${API_URL}resetPassword`,
      {
        emailValue: email,
        newPasswordValue: newPassword
      },
         // { headers: authHeader() }//authHeader or token is not required 
    );
    return response.data;
  } catch (error) {
    console.error('Error occurred in submitResetPassword:', error);
    throw error;
  }
};



  