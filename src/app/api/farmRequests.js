import http from "./client";
import config from '../../config.json';
import {getJwt} from "./auth";


const apiEndPoint = config.apiEndPoint + "/api";
// const tokenKey = config.apiEndPoint + "/api/token";
const tokenAccess = 'accessTokenKey';
const tokenRefresh = 'refreshTokenKey';


export async function farmRequests(farmId) {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/requests/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function farmRequest(farmId, requestId) {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/farms/${farmId}/requests/${requestId}/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function farmRequestCreate(farmId, request) {
    const access = await getJwt();
    return await http.post(`${apiEndPoint}/farms/${farmId}/requests/`, request, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function farmRequestUpdate(farmId, requestId, request) {
    const access = await getJwt();
    return await http.put(`${apiEndPoint}/farms/${farmId}/requests/${requestId}/`, request, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function farmRequestDelete(farmId, requestId) {
    const access = await getJwt();
    return await http.delete(`${apiEndPoint}/farms/${farmId}/requests/${requestId}/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function getFarmCategories() {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/farms/farm-categories/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}


const farmsApi = {
    farmRequests,
    farmRequest,
    farmRequestCreate,
    farmRequestUpdate,
    farmRequestDelete,
    getFarmCategories
};

export default farmsApi;