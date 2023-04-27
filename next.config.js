'use strict'
/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'standalone',
   reactStrictMode: true,
   compiler: {
      styledComponents: true,
   },
}

module.exports = {
   ...nextConfig,
   webpack(config, { dev, webpack }) {
      if (dev) {
         config.watchOptions = {
            poll: 800,
            aggregateTimeout: 300,
         }
      }

      config.module.rules.push(
         {
            type: 'asset',
            test: /\.svg$/i,
            resourceQuery: /url/,
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
      )

      return config
   },
}
