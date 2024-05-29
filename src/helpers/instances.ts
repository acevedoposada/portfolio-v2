import axios from "axios";

export const weatherApiInstance = axios.create({
  baseURL: process.env.WEATHER_API_URL,
});
