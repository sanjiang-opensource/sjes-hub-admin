'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1497579866745_3825';

  // add your config here

  config.middleware = [
    'errorHandler',
  ];

  config.errorHandler = {
    match: '/api',
  };

  return config;
};
