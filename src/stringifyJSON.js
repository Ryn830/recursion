// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
var result = '';
var type = typeof obj;

if (type === 'number') {
	return result +  obj + '';
} else if (type === 'boolean') {
	return result + obj + '';
} else if (type === 'string') {
	return "\"" + obj + "\"";
} else if (type === 'object') {
	console.log(obj);
	return result + obj + '';
}

};
