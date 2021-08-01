import Repository, { baseUrl,baseUrlApi,ApiVersion} from './Repository';
class AuthRepository {
    async login(payload){
        const endPoint = `auth/login`;
        const reponse = await Repository.post(`${baseUrlApi}/${endPoint}`,payload)
            .then((response) => {
                if(response.data.status == 0)
                    return {error : response.data.msg};
                return response.data;
            })
            .catch((error) => {
                return {error : JSON.stringify(error)};
            });
        return reponse;
    }
    async register(payload){
        const endPoint = `auth/register`;
        const reponse = await Repository.post(`${baseUrlApi}/${endPoint}`,payload)
            .then((response) => {
                if(response.data.status == 0)
                    return {error : response.data.msg};
                return response.data;
            })
            .catch((error) => {
                return {error : JSON.stringify(error)};
            });
        return reponse;
    }
}
export default new AuthRepository();
