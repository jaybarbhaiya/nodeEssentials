var a = 1;

// module.exports.a  (long formation)
exports.a = a; // short hand notation
exports.b = 2;

exports.printB = function() {
	console.log("Value of b = " + module.exports.b);
}