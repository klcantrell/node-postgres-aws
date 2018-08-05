const db = require('../db/models');

module.exports.createTodo = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; 
  const body = JSON.parse(event.body);

  db.Todo
    .create({
      task: body.task,
    })
    .then(todo => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          todo,
        })
      });
    });
};