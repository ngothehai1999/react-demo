import axios from 'axios';

function apiClient() {
    const {API_URL} = "http://10.254.61.24:8095/api/";

    const axiosInstance = axios.create({
        baseUrl: API_URL,
        responseType: 'json',
    });
    return axiosInstance;
};

export default apiClient;