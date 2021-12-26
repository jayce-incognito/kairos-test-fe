import { AxiosInstance } from 'axios';
import createAxiosInstance from './axios';

class RpcHTTPServiceClient {
    http: AxiosInstance;

    constructor(url: string) {
        this.http = createAxiosInstance({ baseURL: url });
    }

    apiFetchProfile() {
        return this.http
            .get('v1/auth/1')
            .then((res: any) => res)
            .catch((error: any) => error);
    }
}

export default new RpcHTTPServiceClient('https://6164054db55edc00175c1cc9.mockapi.io');
