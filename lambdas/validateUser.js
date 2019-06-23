//import { resolve } from "path";

async function test(x) {
	if(x === 'yay') {
		return 'awesome';
	} else {
		throw('shit');
	}
}

let item = 'yay';

test(item).then((x) => { 
	console.log(x);
}).catch((x) => {
	console.log(x);
});