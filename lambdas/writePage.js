'use strict';
/*

TO DO:
- function to write data
- validate data
	fail if not url encoded uri
	fail if author does not exist in author db
	fail if mr author does not exist in author db
	fail if category_id is empty
	fail if category_id is not in categories db, or create the category (TBD)
	fail if any types are incorrect
- only fire write-data function when data is validated

*/



class Validator {
	//validate required fields
	requiredFields(data) {
		//these fields must e
		const fields = ["uri", "or_author", "mr_author", "title", "category_id", "content", "template_id"];
		var i;
		for (i = 0; i<fields.length; i++) {
			if(data[fields[i]]) {
				if(i === fields.length - 1) {
					return data;
				}
			} else {
				return {"error" : `${fields[i]} is required`}
			}
		}

	}	
	uri(data) {
		var regexp = /^[\w\-\._~:/#[\]@!\$'\(\)\*\+,;=.]+$/gm;
		var isURL = regexp.test(data.uri);
		if (isURL === false) {
			return {"error" : "please enter a valid url"}
		} else {
			return data;
		}
	}

}
let validate = new Validator;


module.exports.handler = (event, context, callback) => {
	let data = event.queryStringParameters;
	console.log(validate.uri(data));
}