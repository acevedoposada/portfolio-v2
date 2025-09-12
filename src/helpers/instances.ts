import CryptoJS from "crypto-js";
import axios from "axios";
import { ENCRYPTION_SECRET } from "@/constants/secrets";
const API_SECRET = process.env.API_KEY;

console.log("NODE_ENV", process.env.NODE_ENV);

export const weatherApiInstance = axios.create({
  baseURL: process.env.WEATHER_API_URL,
});

const apiInstance = axios.create();
apiInstance.interceptors.request.use(function (config) {
  const encryptApiKey = CryptoJS.AES.encrypt(API_SECRET ?? "", ENCRYPTION_SECRET ?? "").toString();
  return { ...config, headers: { "x-api-key": encryptApiKey } } as any;
});
apiInstance.interceptors.response.use(function (response) {
  try {
    response.data = JSON.parse(
      CryptoJS.AES.decrypt(response.data, ENCRYPTION_SECRET ?? "").toString(CryptoJS.enc.Utf8)
    );
    return response;
  } catch {
    throw new Error("Error trying to decrypt response data");
  }
});

export { apiInstance };
