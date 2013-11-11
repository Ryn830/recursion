// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here

var result = '';
var type = $.type(obj);

switch(type) {
  case 'string':
    result = '"' + obj + '"';
    break;
  case 'array':
    result = result + '[';
    for (var i = 0; i < obj.length; i++) {
    	result = result + stringifyJSON(obj[i]) + ',';
    }
    result = result + ']';
    break;
  case 'object':
    result = result + '{';
      for (var key in obj) {
      	result = result + '' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    result = result + '}';
    break;
  default:
    result = result + '' + obj + '';
    break;
  }
result = result.replace(',]', ']');
result = result.replace(',}', '}');
return result;
};
