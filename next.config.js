"use strict";
/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'standalone',
   reactStrictMode: true,
   compiler: {
      styledComponents: true,
   },
   // images: {
   //    unoptimized: true,
   //  },
};

module.exports = {
   ...nextConfig,
   webpack(config) {
      config.module.rules.push(
         {
            type: "asset",
            test: /\.svg$/i,
            resourceQuery: /url/,
         },
         {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: { not: [/url/] },
            use: [
               {
                  loader: "@svgr/webpack",
                  options: {
                     svgoConfig: {
                        plugins: [
                           {
                              name: "preset-default",
                              params: {
                                 overrides: {
                                    removeViewBox: false,
                                 },
                              },
                           },
                        ],
                     },
                  },
               },
            ],
         }
      );

      return config;
   },
   async exportPathMap(defaultPathMap, { dev }) {
      const pathMap = {};

      if (dev) {
         return defaultPathMap;
      }

      return {
         "/": { page: "/" },
         "/sign-in": {
            page: "/sign-in",
            query: {
               title: "Sign In",
               access: "Guest",
               description: "Sign in to your account",
            },
         },
         "/sign-up": {
            page: "/sign-up",
            query: {
               title: "Sign Up",
               access: "Guest",
               description: "Create a new account",
            },
         },
         "/dashboard": {
            page: "/dashboard",
            query: {
               title: "Dashboard",
               access: "AuthenticatedUser",
               description: "Access your dashboard",
            },
         },
         "/deposit": {
            page: "/deposit",
            query: {
               title: "Buy tokens",
               access: "AuthenticatedUser",
               description: "Purchase tokens securely",
            },
         },
         "/notifications": {
            page: "/notifications",
            query: {
               title: "Notifications",
               access: "AuthenticatedUser",
               description: "View your notifications",
            },
         },
         "/transactions": {
            page: "/transactions",
            query: {
               title: "Transactions",
               access: "AuthenticatedUser",
               description: "Check your transactions",
            },
         },
      };
   },
};
