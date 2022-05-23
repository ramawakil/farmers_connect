import { create } from 'apisauce';


const apiClient = create({
    baseURL: 'http://34.121.226.195:8069',
});

// will import the token from https only cookies later

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    return await get(url, params, axiosConfig);
};

export default apiClient;
