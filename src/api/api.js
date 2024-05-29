import axios from "axios";

const instance = axios.create({baseURL: 'https://masterclass.kimitsu.it-incubator.io/api/'});

export const shopAPI = {
    getProducts() {
        return instance.get(`products/`);
    },
    getProductById(id) {
        return instance.get(`products/${id}`);
    }
}