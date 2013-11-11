// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
var results = [];
var element = arguments[1] || document.body;
var traverseElm = function(element) {
	return getElementsByClassName(className,element)[0]; 
};
var checkClassname = results.indexOf.call(element.classList, className) !== -1;
var childrenResults = results.map.call(element.children, traverseElm).filter(Boolean);

if (checkClassname) {
  results.push(element);
} else {
  results = results.concat(childrenResults);
}

return results;
};
