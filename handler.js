module.exports.challenge = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: event.queryStringParameters.challenge,
  };

  console.log(event.body);

  callback(null, response);
};

module.exports.webhook = (event, context, callback) => {
  const response = {
    statusCode: 200
  };

  console.log(event.body);

  callback(null, response);
};
