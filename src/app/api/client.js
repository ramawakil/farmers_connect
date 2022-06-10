import axios from "axios";
import { toast } from "react-toastify";
import logger from "../services/logService";
import config from "../../config.json";


const tokenJwt = 'accessTokenKey';
axios.defaults.baseURL = config.apiEndPoint;

axios.defaults.headers.common["Authorization"] = `JWT ${localStorage.getItem(tokenJwt)}`;
// add token to every request
// axios.interceptors.request.use(
//   (config) => {
//     const token = getJwt();
//     if (token) setJwt(token);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );


axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    // // when token expires reroute to login
    // if (error.response.status === 401) {
    //     window.localStorage.removeItem(tokenJwt);
    //     toast.error("Session expired, please login again");
    //     window.location.reload();
    // }

    if (!expectedError) {
        logger.log(error);
        toast.error("An unexpected error occured.");
    }
    return Promise.reject(error);
});

function setJwt(jwt) {
    axios.defaults.headers.common["Authorization"] = `JWT ${jwt}`;
}

function getJwt() {
    try {
        return localStorage.getItem(tokenJwt);
    } catch (error) {
        return null;
    }
}

const client =  {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt,
    getJwt
};

export default client;
