const actions = require('./actions');

module.exports = [
  { method: 'GET', path: '/trips', handler: (request, h) => actions.getTrips(request, h)},
  { method: 'GET', path: '/trips/{id}', handler: (request, h) => actions.getTrip(request, h) },
  { method: 'POST', path: '/trips', handler: (request, h) => actions.add(request, h) },
  { method: 'PUT', path: '/trips/{id}', handler: (request, h) => actions.update(request, h) },
  { method: 'DELETE', path: '/trips/{id}', handler: (request, h) => actions.remove(request, h) }
];