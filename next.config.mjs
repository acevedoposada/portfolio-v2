/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn4.iconfinder.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "static-00.iconduck.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.iconscout.com",
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
