'use strict';
/*

TO DO:
- function to write data
- validate data
	fail if author does not exist in author db
	fail if mr author does not exist in author db
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

	types(data) {
		return data;
	}

	//make sure the uri is a safe one	
	uri(data) {
		var regexp = /^[\w\-\._~:/#[\]@!\$'\(\)\*\+,;=.]+$/gm;
		var isURL = regexp.test(data.uri);
		if (isURL === false) {
			return {"error" : "please enter a valid url"}
		} else {
			return data;
		}
	}

	authors(data) {
		return data;
	}
	
	categories(data) {
		return data;
	}

}
let validate = new Validator;


module.exports.handler = (event, context, callback) => {
	let data = event.queryStringParameters;

	//resolve with data once an api connection has been made, OR reject if the connection fails
	let promise = new Promise((resolve, reject) => {
		if(typeof(data) !== "undefined") {
			resolve(data);
		} else {
			reject({"error" : "no data"});
		}
	});
	
	promise.then((data) => {
		if(validate.types(data) === data) {
			return data;
		} else {
			callback(validate.types(data));
			return data;
		}
	}).then((data)=> {
		if(validate.uri(data) === data) {
			return data;
		} else {
			callback(validate.uri(data));
			return data;
		}
	}).then((data)=>{
		if(validate.authors(data) === data) {
			return data;
		} else {
			callback(validate.authors(data));
			return data;
		}
	}).then((data)=>{
		if(validate.categories(data) === data) {
			callback(null, data);
			return data;
		} else {
			callback(validate.categories(data));
			return data;
		}
	}).catch((data)=>{
		callback(data);
	});


}