'use strict';
const validate = require('./validateWrite');
//function to get page
module.exports.handler = async (event, context, callback) => {
    let a = await validate.handler(event);
    if(a === "success") {
        return a;
    } else {
        return a;
    }
}