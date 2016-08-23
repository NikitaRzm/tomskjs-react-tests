chai.config.truncateThreshold = 0; // shows not truncated full output in test reports
var context = require.context('./app', true, /-tests?\.js$/);
context.keys().forEach(context);