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
      break
    default:
      result = result + '' + obj + '';
    break;
  }
return result;
};
