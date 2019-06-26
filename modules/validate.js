'use strict';

// the various processes used for validating
// these should have unit tests
class Validator {
	//validate required fields
	requiredFields(data) {
		//these fields must e
		let fields = ['uri', 'or_author', 'mr_author', 'title', 'category_id', 'content', 'template_id'];
		var i;
		for (i = 0; i < fields.length; i++) {
			if (data[fields[i]]) {
				if (i === fields.length - 1) {
					return data;
				}
			} else {
				return { 'error': `${fields[i]} is required` };
			}
		}
	}
	types(data) {
		console.log('types are good');
		return data;

	}

	//make sure the uri is a safe one
	uri(data) {
		var regexp = /^(\/).+([a-zA-Z0-9_-])(\/)?$/i;
		var isURL = regexp.test(data);
		if (isURL === false) {
			return { 'error': 'please enter a valid url' };
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
module.exports.validator = Validator;
//validate the creation of new pages
module.exports.newPage = async (event) => {
	let validate = new Validator;
	let data = event.queryStringParameters;

	//resolve with data once an api connection has been made, OR reject if the connection fails
	let allData = new Promise((resolve, reject) => {
		if (typeof (data) !== 'undefined') {
			resolve({ 'data present': 'success' });
		} else {
			reject({ 'error': 'no data' });
		}
	});

	let types = new Promise((resolve, reject) => {
		resolve({ 'type check': 'success' });
	});

	let uri = new Promise((resolve, reject) => {
		if (validate.uri(data.uri) === data.uri) {
			resolve({ 'valid uri': 'success' });
		} else {
			reject({ 'error': 'please enter a valid URI' });
		}
	});

	let authors = new Promise((resolve, reject) => {
		resolve({ 'authors': 'success' });
	});
	let categories = new Promise((resolve, reject) => {
		resolve({ 'categories': 'success' });
	});

	let final = Promise.all([allData, types, uri, authors, categories]).then((data) => { return 'success'; }).catch((data) => { return data; });

	return final;

};

//validate the creation of a new user
module.exports.newUser = async (event) => {

};

// validate the creation of categories
module.exports.newCategory = async (event) => {

};
