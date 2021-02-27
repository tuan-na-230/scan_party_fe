import http from '../../http/index';

const urlBase = 'api/v1'

class LoginService {
    async signUp(data) {
        const url = `${urlBase}/auth`
        try {
            const res = await http.httpPost(url, data);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}

const loginService = new LoginService();
export default loginService