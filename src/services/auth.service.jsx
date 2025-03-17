import axios from 'axios';
import config from '../environment/config';
import { authHeader } from './auth.header';
const API_URL = config.API_URL;


// Function to handle user login
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}authenticate`, {
      username: username.trim(), // Remove extra spaces
      password: password.trim()
    });

    if (response.data.token) {

      localStorage.setItem('user', JSON.stringify({
        token: response.data.token,
        username: username
      }));


   

      return response.data;
    }

  
    return response.data;

    
  } catch (error) {
    console.error('Error occurred in login:', error);
    throw error;
  }


};



export const logout = async (logoutType) => {
      try {
        // customAuditStampingLogout(user.username, logoutType);
        localStorage.removeItem('user');
        localStorage.clear();
  
  
      } catch (error) {
        console.error('Error occurred in logout:', error);
        throw error; 
      }
  };


 // Method to fetch user details using the logged-in user's information
 export const getUserDetails = async () => {
  const user = JSON.parse(localStorage.getItem('user')); 
  const username = user?.username; 

  if (!username) {
    throw new Error('No user found');
  }


  try {
    const response = await axios.post(
      `${API_URL}get-user-details`,
      {}, // Empty body
      { headers: { 'Content-Type': 'application/json', ...authHeader() } }
    );

    const userDetails = response.data;

    // Assuming userDetails is an array with a single object
    if (!Array.isArray(userDetails) || userDetails.length === 0) {
      throw new Error('No user details found');
    }

    const details = userDetails[0]; // Extract first object
    const empName = details.name;
    const emailId = details.email;
    const phone = details.phone;
    // const role = details.role;

    return { empName, emailId, phone }; // Return structured object

  } catch (error) {
    console.error(' Error occurred in getUserDetails:', error);
    throw error;
  }
};






export const submitChangePassword = async (oldPassword, newPassword, email) => {
  try {
    const response = await axios.post(
      `${API_URL}change-password-submit`,
      { oldPasswordValue: oldPassword ,
        newPasswordValue: newPassword ,
        email : email

      },
      // { headers: authHeader() }}//authHeader or token is not required as change-password is available before login if otp is verified also
    );
    return response.data;
  } catch (error) {
    console.error('Error occurred in submitChangePassword:', error);
    throw error;
  }
};


  // Function for custom audit stamping logout
// export const customAuditStampingLogout = async (username, logoutType) => {
//     if (!username) {
//       throw new Error('No user found');
//     }
  
//     try {
//       const response = await axios.post(
//         `${API_URL}custom-audit-stamping-logout`,
//         { username, logoutType },  
//         { headers: { 'Content-Type': 'application/json', ...authHeader() } }
//       );
//       return response.data;
//     } catch (error) {
//       console.error('Error occurred in customAuditStampingLogout:', error);
//       throw error;
//     }
//   };
  

