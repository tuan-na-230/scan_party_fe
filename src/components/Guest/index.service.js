import { Redirect } from 'react-router-dom';
import axiosClient from '../../http/axiosClient';
import http from '../../http/index';

const urlBase = 'api/v1'

class GuestService {
    async signUp (data) {
        const endpoint = `${urlBase}/auth`
        return axiosClient.post(endpoint, data)
    }
}

const guestService = new GuestService();
export default guestService