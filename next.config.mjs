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
    ],
  },
  env: {
    WEATHER_API_URL: "https://api.open-meteo.com/v1",
  },
};

export default nextConfig;
