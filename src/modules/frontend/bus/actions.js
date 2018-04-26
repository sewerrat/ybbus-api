const getBuses = (request, h) => {
  return 'getBuses';
}

const getBus = (request, h) => {
  const id = request.params.id;
  return `getBus ${id}`;
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
  getBus,
  getBuses,
  add,
  update,
  remove
};