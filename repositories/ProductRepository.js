import { getSessionUser } from '~/store/auth/action';
import Repository, { baseUrl,baseUrlApi,ApiVersion} from './Repository';
class ProductRepository {
    async delete(item){
        //console.log("item="+item);
        const user=getSessionUser();
        const obj={product_id:item.id};
        const endPoint = `products/delete`;
        const reponse = await Repository.post(`${baseUrlApi}/${endPoint}`,obj,
            { headers: {"Authorization" : `Bearer ${user.access_token}`} })
                .then((response) => {
                    if(response.data.status == 0)
                        return {error : response.data.msg};
                    return response.data.getRecords;
                })
                .catch((error) => {
                    if(typeof error.message != 'undefined')
                        return {error : error.message};
                    return {error : JSON.stringify(error)};
                });
        return reponse;
    }
    async save(payload) {
        const user=getSessionUser();
        //const endPoint = `products/store`;
        const endPoint = `products/store`;
        const reponse = await Repository.post(`${baseUrlApi}/${endPoint}`,payload,
                    { headers: {"Authorization" : `Bearer ${user.access_token}`} },payload)
            .then((response) => {
                if(response.data.status == 0)
                    return {error : response.data.msg};
                return response.data.getRecords;
            })
            .catch((error) => {
                if(typeof error.message != 'undefined')
                    return {error : error.message};
                return {error : JSON.stringify(error)};
            });
        return reponse;
    }
    async get(payload) {
        const user=getSessionUser();
        const endPoint = `products/index`;
        const reponse = await Repository.get(`${baseUrlApi}/${endPoint}`,
            { headers: {"Authorization" : `Bearer ${user.access_token}`} })
            .then((response) => {
                if(response.data.status == 0)
                    return null;
                return response.data.getRecords;
            })
            .catch((error) => {
                if(typeof error.message != 'undefined')
                    return {error : error.message};
                return {error : JSON.stringify(error)};
            });
        return reponse;
    }
}
export default new ProductRepository();
