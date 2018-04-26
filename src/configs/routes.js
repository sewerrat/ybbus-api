require('sexy-require');
const routeUtils = require('/src/utils/routes');

const backend = require('/src/modules/backend');
const frontend = require('/src/modules/frontend');

var connectors = [
  {
    uri: 'backend',
    routes: backend
  },
  {
    uri: 'frontend',
    routes: frontend
  }
]

const routes = routeUtils.generateRoute(connectors);

console.log(`routes: ${routes}`);

module.exports = routes;