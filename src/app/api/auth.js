import http from "./client";
import config from '../../config.json';


const apiEndPoint = config.apiEndPoint;
// const tokenKey = config.apiEndPoint + "/api/token";
const token = 'tokenKey';

http.setJwt(getJwt());

export async function login(credentials) {
  await logout();
  const res =
      await http.post(`${apiEndPoint}/auth/jwt/create/`, credentials);
  console.log(res);
  // loginWithJwt(jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(token, jwt);
}

export function logout() {
  localStorage.removeItem(token);
}

export function getCurrentUser() {
  try {
    return localStorage.getItem(token);
  } catch (error) {
    return null;
  }
}
//
export function getJwt() {
  return localStorage.getItem(token);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
