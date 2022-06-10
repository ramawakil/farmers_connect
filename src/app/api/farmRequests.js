import http from "./client";
import config from '../../config.json';
import {getJwt} from "./auth";


const apiEndPoint = config.apiEndPoint + "/api";
// const tokenKey = config.apiEndPoint + "/api/token";
// const tokenAccess = 'accessTokenKey';
// const tokenRefresh = 'refreshTokenKey';


export async function farmRequests() {
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

export async function farmRequestCreate(request) {
    const access = await getJwt();
    return await http.post(`${apiEndPoint}/requests/`, request, {
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
    return await http.get(`${apiEndPoint}/farm-categories/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function addComment(id, data) {
    const access = await getJwt();
    return await http.post(`${apiEndPoint}/requests/${id}/responses/`, data, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    })
}

export async function getEmployees() {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/employees/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    })
}

export async function registerEmployee(data) {
    const access = await getJwt();
    return await http.post(`${apiEndPoint}/employees/`, data, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    })
}

export async function getFarmers() {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/farmers/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    })
}

export async function registerFarmer(data) {
    const access = await getJwt();
    return await http.post(`${apiEndPoint}/farmers/`, data, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    })
}


const farmsApi = {
    farmRequests,
    farmRequest,
    farmRequestCreate,
    farmRequestUpdate,
    farmRequestDelete,
    getFarmCategories,
    addComment,
    getEmployees,
    registerEmployee,
    getFarmers,
    registerFarmer
};

export default farmsApi;