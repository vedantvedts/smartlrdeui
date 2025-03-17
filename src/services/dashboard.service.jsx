import axios from 'axios';
import config from '../environment/config';
import { authHeader } from 'services/auth.header'; 
const API_URL = config.API_URL;





  // Function to handle Change password 

  export const submitChangePassword = async (newPassword) => {
    try {
      const response = await axios.put(
        `${API_URL}change-password-submit`,
        {
          newPasswordValue: newPassword,
          emailValue: newPassword
        },
        { headers: authHeader() }
      );
      return response.data;
    } catch (error) {
      console.error('Error occurred in submitChangePassword:', error);
      throw error;
    }
  };
  


  