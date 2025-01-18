/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        bodySizeLimit: "15mb", // Increase the limit as per your requirement
      },
    },
  };
  
  export default nextConfig;
  