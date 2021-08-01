import axios from 'axios';
//const baseDomain = 'http://wedevs.infoagebd.com'; // API for products
//const baseDomainApi = 'http://api.wedevs.infoagebd.com/api'; // API for products

const baseDomain = 'https://wedevs.infoagebd.com'; // API for products
const baseDomainApi = 'https://api.wedevs.infoagebd.com/api'; // API for products
const baseDocDomain = 'https://api.wedevs.infoagebd.com'; // API for products

export const customHeaders = {
    Accept: 'application/json',
};
export const baseUrl = `${baseDomain}`;
export const baseUrlApi = `${baseDomainApi}`;
export const baseUrlDoc = `${baseDocDomain}`;

export const ApiVersion = "v1/public";
export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
