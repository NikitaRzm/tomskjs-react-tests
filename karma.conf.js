// Karma configuration

const webpackConfig = require('./webpack/tests.config');

module.exports = (config) => {
  config.set({
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],
    
    client: {
      captureConsole: true,
      mocha: {
        timeout: '10000'
      }
    },
    
    browserNoActivityTimeout: 30000,
    
    mochaReporter: {
      output: 'full'
    },
    
    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.min.js',
      'tests.webpack.js'
    ],
    
    
    // list of files to exclude
    exclude: [
    ],
    
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],
    
    
    // web server port
    port: 9876,
    
    
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    
    
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    
    
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    
    
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    
    plugins: [
      "karma-mocha-reporter",
      "karma-sourcemap-loader",
      "karma-phantomjs-launcher",
      "karma-chrome-launcher",
      "karma-webpack",
      "karma-mocha",
      "karma-chai",
      "karma-sinon"
    ],
    
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    webpack: webpackConfig,
    
    webpackMiddleware: {
      noInfo: true
    }
  })
};