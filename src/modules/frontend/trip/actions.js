const getTrips = (request, h) => {
  return 'getTrips';
}

const getTrip = (request, h) => {
  const id = request.params.id;
  return `getTrip ${id}`;
}

const add = (request, h) => {
  return 'add';
}

const update = (request, h) => {
  return 'update';
}


const remove = (request, h) => {
  return 'remove';
}

module.exports = {
  getTrip,
  getTrips,
  add,
  update,
  remove
};