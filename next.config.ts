import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  reactStrictMode:false,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'ucarecdn.com',
  
  

    },{
      protocol:'https',
      hostname:'wordpress-1357143-4991798.cloudwaysapps.com',
    }]
  }
};

export default nextConfig;
