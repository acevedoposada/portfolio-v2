/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
  env: {
    WEATHER_API_URL: "https://api.open-meteo.com/v1",
    INSTAGRAM_URL: "https://www.instagram.com/davidchacevedo_",
    LINKEDIN_URL: "https://www.linkedin.com/in/cristian-david-acevedo-posada/",
    GITHUB_URL: "https://github.com/acevedoposada",
    RESUME_FILE_ID: process.env.RESUME_FILE_ID,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    SECRET_KEY: process.env.SECRET_KEY,
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
