import api from "./api";

const config = {
    headers: {
        "x-rapidapi-key": "c47295fa935f6c7b2c9ecb2937f1c068"
    }
};


const getTimezone = () => api.api.get(`timezone`, config);

export {
    getTimezone as getTimezoneService
}