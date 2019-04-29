'use strict';


module.exports.write = () => {
  let responseBody = {
    "foo" : "bar"
  }
  let response = {
    statusCode: 200,
    headers: {
    },
    body: JSON.stringify(responseBody)
};
return response;
}