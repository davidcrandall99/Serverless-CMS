'use strict';
var data = {};
let log = (msg, type) => {
	let time = new Date();
	data.time = time;
	data.message = msg;
	data.type = type;
	console.log(data);
};
class Logger {
	error(msg) {
		log(msg, 'ERROR');
	}
	warning(msg) {
		log(msg, 'WARNING');
	}
	log(msg) {
		log(msg, 'INFO');
	}
}

module.exports = Logger;