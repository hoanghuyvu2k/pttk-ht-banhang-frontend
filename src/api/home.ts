import { ApiClient } from "./config";

const homeApi = {
    getListElectronic: (payload) => {
        return ApiClient.post('electronic-items/search',payload);
    },
    getListBook: () => {
        return ApiClient.get('book-items');
    }
};

export {homeApi};