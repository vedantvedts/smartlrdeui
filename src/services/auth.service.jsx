import axios from 'axios';
import config from '../environment/config';
import { authHeader } from './auth.header';

const API_URL = config.API_URL;




export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };

  export const  getEmpDetails= async(username) => {
    if (!username) {
      throw new Error('No user found');
    } try {
      return (await axios.post(`${API_URL}get-emp-details`,{},{headers : {'Content-Type': 'application/json', ...authHeader()}})).data;
    } catch (error) {
      console.error('Error occurred in getEmpDetails():', error);
      throw error;
    }
  };

  // Function for custom audit stamping logout
export const customAuditStampingLogout = async (username, logoutType) => {
    if (!username) {
      throw new Error('No user found');
    }
  
    try {
      const response = await axios.post(
        `${API_URL}custom-audit-stamping-logout`,
        { username, logoutType },  
        { headers: { 'Content-Type': 'application/json', ...authHeader() } }
      );
      return response.data;
    } catch (error) {
      console.error('Error occurred in customAuditStampingLogout:', error);
      throw error;
    }
  };
  


export const logout = async (logoutType) => {
    const user = getCurrentUser();
    if (user && user.username) {
      try {
  
         customAuditStampingLogout(user.username, logoutType);
        localStorage.removeItem('user');
        localStorage.removeItem('roleId');
        localStorage.removeItem('password');
  
  
      } catch (error) {
        console.error('Error occurred in logout:', error);
        throw error; 
      }
    } else {
      // No user found in localStorage, just remove the item
      localStorage.removeItem('user');
      localStorage.removeItem('roleId');
      localStorage.removeItem('password');
    }
  };
