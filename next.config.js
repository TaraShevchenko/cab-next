'use strict';
/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   compiler: {
      styledComponents: true
   },
   transpilePackages: [],
};

module.exports = {
   ...nextConfig,
   webpack(config, options) {
      config.module.rules.push(
         {
            type: 'asset',
            test: /\.svg$/i,
            resourceQuery: /url/
         },
         {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: { not: [/url/] },
            use: [
               {
                  loader: '@svgr/webpack',
                  options: {
                     svgoConfig: {
                        plugins: [
                           {
                              name: 'preset-default',
                              params: {
                                 overrides: {
                                    removeViewBox: false
                                 }
                              }
                           }
                        ]
                     }
                  }
               }
            ]
         }
      );

      return config;
   }
};
