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


       // await customAuditStampingLogin(username);
    // const emp = await getEmpDetails(username);
    // localStorage.setItem('roleId',emp.qmsFormRoleId)
    // localStorage.setItem('empId',emp.empId)

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



// export const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem('user'));
//   };

//   export const  getEmpDetails= async(username) => {
//     if (!username) {
//       throw new Error('No user found');
//     } try {
//       return (await axios.post(`${API_URL}get-emp-details`,{},{headers : {'Content-Type': 'application/json', ...authHeader()}})).data;
//     } catch (error) {
//       console.error('Error occurred in getEmpDetails():', error);
//       throw error;
//     }
//   };

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
  
