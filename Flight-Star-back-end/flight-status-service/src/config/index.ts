const config = {
  consul: {
    server: {
      prod: {
        host: 'consul',
        port: '8500',
      },
      dev: {
        host: 'localhost',
        port: '8501',
      },
    },
    service: {
      name: 'service-flight-status',
    },
  },
  flight_service: {
    url: 'http://service-flight-system:8181/api/flights',
  },
  log4js: {
    appenders: {
      console: {
        type: 'console',
      },
      ms: {
        type: 'dateFile',
        pattern: '-yyyy-MM-dd.log',
        alwaysIncludePattern: true,
        filename: 'log/ms',
        maxLogSize: 1000000,
        compress: true,
      },
    },
    categories: {
      default: {
        appenders: ['ms', 'console'],
        level: 'debug',
      },
    },
  },
};

export default config;
