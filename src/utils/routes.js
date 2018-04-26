require('sexy-require');

const preUri = '';
const generateRoute = (connectors) => {
  const routes = connectors.map(connector => {
    const uri = `${preUri}/${connector.uri}`;
    const routes = [].concat.apply([], connector.routes);
    const newRoutes = routes.map(route => {
      return {
        ...route,
        path: `${uri}${route.path}`
      }
    });
    return newRoutes;
  });
  return [].concat.apply([], routes);
}

module.exports = {
  generateRoute
}