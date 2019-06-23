'use strict';
const validate = require('./validateWrite');
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

//function to get page
module.exports.handler = (event, context, callback) => {
	let a = validate.newPage(event);
	a.then((a) => {
		if (a === 'success') {
			var d = event.queryStringParameters;
			var data = {
				uri: { S: d.uri },
				or_author: { S: d.or_author },
				mr_author: { S: d.or_author },
				title: { S: d.title },
				image: { S: d.image },
				category_id: { S: d.category_id },
				description: { S: d.description },
				content: { S: d.content },
				template_id: { S: d.template_id },
				tags: { S: d.tags },
				date_created: { S: d.date_created },
				date_modified: { S: d.date_modified }

			};

			var params = {
				Item: data,
				ReturnConsumedCapacity: 'TOTAL',
				TableName: process.env.DYNAMODB_TABLE
			};

			dynamodb.putItem(params, function (err, data) {
				if (err) {
					callback(JSON.stringify(err));
				} else {
					callback(null, data);
				}
			});
		} else {
			callback(JSON.stringify(a));
		}
	});
};