'use strict';

//function to get page
module.exports.handler = (event, context, callback) => {
    let response = {
        "statusCode"    : 200,
        "headers"       : {},
        "body"          : JSON.stringify(event.path)
    }
    callback(null, response);
}