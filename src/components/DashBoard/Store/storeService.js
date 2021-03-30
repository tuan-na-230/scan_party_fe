import { Redirect } from 'react-router-dom';
import axiosClient from '../../../http/axiosClient';

const urlBase = 'api/v1';

class StoreService {
    async getFileExcel (id) {
        const endpoint = `${urlBase}/files/excel/${id}`
        return axiosClient.get(endpoint)
    }

    async getFileImage (id) {
        const endpoint = `${urlBase}/files/image/${id}`
        return axiosClient.get(endpoint)
    }
}

const storeService = new StoreService();
export default storeService;