const db = require('../db/models');

module.exports.getTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; 
  db.Todo.findAll()
    .then(todos => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          todos,
        }),
      })
    });
};
