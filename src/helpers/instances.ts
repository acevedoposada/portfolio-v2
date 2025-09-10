import CryptoJS from "crypto-js";
import axios from "axios";

const ENCRYPTION_SECRET = process.env.SECRET_KEY;
const API_SECRET = process.env.API_KEY;

export const weatherApiInstance = axios.create({
  baseURL: process.env.WEATHER_API_URL,
});

const apiInstance = axios.create();
apiInstance.interceptors.request.use(function (config) {
  const encryptApiKey = CryptoJS.AES.encrypt(API_SECRET ?? "", ENCRYPTION_SECRET ?? "").toString();
  return { ...config, headers: { "x-api-key": encryptApiKey } } as any;
});

export { apiInstance };
