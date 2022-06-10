import http from "./client";
import config from '../../config.json';
import {getJwt} from "./auth";


const apiEndPoint = config.apiEndPoint + "/api";
// const tokenKey = config.apiEndPoint + "/api/token";
const tokenAccess = 'accessTokenKey';
const tokenRefresh = 'refreshTokenKey';

export async function getFarms() {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/farms/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function getFarm(id) {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/farms/${id}/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function createFarm(farm) {
    const access = await getJwt();
    return await http.post(`${apiEndPoint}/farms/`, farm, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function updateFarm(id, farm) {
    const access = await getJwt();
    return await http.put(`${apiEndPoint}/farms/${id}/`, farm, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function deleteFarm(id) {
    const access = await getJwt();
    return await http.delete(`${apiEndPoint}/farms/${id}/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}


const farmsApi = {
    getFarms,
    getFarm,
    createFarm,
    updateFarm,
    deleteFarm
};

export default farmsApi;