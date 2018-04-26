const actions = require('./actions');

module.exports = [
  { method: 'GET', path: '/buses', handler: (request, h) => actions.getBuses(request, h)},
  { method: 'GET', path: '/buses/{id}', handler: (request, h) => actions.getBus(request, h) },
  { method: 'POST', path: '/buses', handler: (request, h) => actions.add(request, h) },
  { method: 'PUT', path: '/buses/{id}', handler: (request, h) => actions.update(request, h) },
  { method: 'DELETE', path: '/buses/{id}', handler: (request, h) => actions.remove(request, h) }
];