import client from './client';


const login = (body) => client.post('/auth', body);


export default {
  login,
};