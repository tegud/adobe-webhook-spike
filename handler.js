module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: event.queryStringParameters.challenge,
  };

  console.log(event.body);

  callback(null, response);
};
