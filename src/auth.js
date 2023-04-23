// import axios from 'axios';
// import jwt_decode from 'jwt-decode';

// const setAuthToken = (token) => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
// };

// const register = async (userData) => {
//   const response = await axios.post(`https://sales-tracker-mern.onrender.com/api/user/signup`, userData);
//   return response.data;
// };

// const login = async (userData) => {
//   const response = await axios.post(`https://sales-tracker-mern.onrender.com/api/user/login`, userData);
//   const { token } = response.data;
//   localStorage.setItem('jwtToken', token);
//   setAuthToken(token);
//   return jwt_decode(token);
// };

// const logout = () => {
//   localStorage.removeItem('jwtToken');
//   setAuthToken(false);
// };

// const getCurrentUser = () => {
//   const token = localStorage.getItem('jwtToken');
//   if (token) {
//     const decoded = jwt_decode(token);
//     return decoded;
//   } else {
//     return null;
//   }
// };

// export { register, login, logout, getCurrentUser };
