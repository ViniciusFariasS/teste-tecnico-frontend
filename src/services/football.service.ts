import { AxiosRequestConfig } from "axios";
import api from "./api";


const getTimezone = (config: AxiosRequestConfig) => api.api.get(`timezone`, config);
const getCountries = (config: AxiosRequestConfig) => api.api.get(`countries`, config);

export {
    getTimezone as getTimezoneService,
    getCountries as getCountriesService,
}