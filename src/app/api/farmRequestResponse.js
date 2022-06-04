import http from "./client";
import config from '../../config.json';
import {getJwt} from "./auth";


const apiEndPoint = config.apiEndPoint + "/api";
// const tokenKey = config.apiEndPoint + "/api/token";
const tokenAccess = 'accessTokenKey';
const tokenRefresh = 'refreshTokenKey';


export async function getRequestResponses(requestId) {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/requests/${requestId}/responses/`, {
        headers: {
            Authorization: `JWT ${access}`
        }
    });
}

const farmsApi = {
    getRequestResponses


};

export default farmsApi;