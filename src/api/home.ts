import { ApiClient } from "./config";

const homeApi = {
    getListElectronic: (payload) => {
        return ApiClient.post('electronic-items/search',payload);
    }
};

export {homeApi};