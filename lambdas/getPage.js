'use strict';
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

//function to get page
console.log(process.env.DYNAMODB_TABLE);
module.exports.handler = (event, context, callback) => {
	var d = event.queryStringParameters;
	var params = {
		Key: {'uri' : { 'S': d.uri } },
		TableName: process.env.DYNAMODB_TABLE
	};

	dynamodb.getItem(params, function (err, data) {
		if (err) {
			callback(JSON.stringify(err));
		} else {
			if(!data.Item) {
				console.log('no data');
			} else {
				var d = data.Item;
				var content = {
					uri: d.uri,
					or_author: d.or_author.S ,
					mr_author: d.or_author.S ,
					title: d.title.S ,
					image: d.image.S ,
					category_id: d.category_id.S ,
					description: d.description.S ,
					content: d.content.S ,
					template_id: d.template_id.S ,
					tags: d.tags.S ,
					date_created: d.date_created.S ,
					date_modified: d.date_modified.S
				};
				callback(null, content);
			}
		}
		return;
	});
};