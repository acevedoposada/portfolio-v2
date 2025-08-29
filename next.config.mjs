/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")]
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
    RESUME_FILE_ID: process.env.RESUME_FILE_ID
  },
};

export default nextConfig;
