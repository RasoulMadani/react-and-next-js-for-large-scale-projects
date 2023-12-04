/** @type {import('next').NextConfig} */
const nextConfig = {
  // اگر عکس ها را از محل دیگری غیر از طرح فعلی می گیریم 
  // باید نشانی اون محل رو بدهیم
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.classbon.com",
        //  اگر لوکال کار می کنیم می توانیم پورت را بدهیم
        // port: ''
      },
    ],
  },
};

module.exports = nextConfig;
