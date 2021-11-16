import { ApiClient } from "./config";

const homeApi = {
    getListElectronic: (payload) => {
        return ApiClient.post('electronic-items/search',payload);
    },
    getListBook: (payload) => {
        return ApiClient.post('book-search', payload);
    }
};

export {homeApi};