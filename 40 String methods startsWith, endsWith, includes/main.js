// all these methors are case seneitive


// startsWith(searchString, Position) => cheak a string starts with another string

var message = 'This is my computer';
var mess = message.startsWith('This') // it is ture
console.log(mess);

var message = 'This is my computer';
var mess = message.startsWith('this') // it is false
console.log(mess);

var message = 'This is my computer';
var mess = message.startsWith('This', 0) // it is ture index 0
console.log(mess);

var message = 'This is my computer';
var mess = message.startsWith('this', 0) // it is false index 1
console.log(mess);


// endsWith(searchString, length) => cheak a string ends with another string

var message = 'This is my computer';
console.log(message.endsWith('Computer')); // it is false

var message = 'This is my computer';
console.log(message.endsWith('computer')); // it is ture

var message = 'This is my computer';
console.log(message.endsWith('Computer', message.length)); // it is false length 

var message = 'This is my computer';
console.log(message.endsWith('computer', message.length)); // it is ture length 

// includes(searchString, position) => cheak if a string cantains another string

var message = 'This is my computer';
console.log(message.endsWith('This')); // it is false

var message = 'This is my computer';
console.log(message.endsWith('this')); // it is ture

var message = 'This is my computer';
console.log(message.endsWith('Computer')); // it is false 

var message = 'This is my computer';
console.log(message.endsWith('computer')); // it is ture

var message = 'This is my computer';
console.log(message.endsWith('my')); // it is ture

var message = 'This is my computer';
console.log(message.endsWith('My')); // it is ture