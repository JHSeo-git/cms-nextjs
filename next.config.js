module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    };
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: 'json',
          use: 'yaml-loader',
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
      ]
    );
    return config;
  },
};
