'use strict';

module.exports.getPage = (e) => {

  let response = {
    statusCode: 200,
    headers: {
    },
    body: JSON.stringify(e)
};
return response;
}