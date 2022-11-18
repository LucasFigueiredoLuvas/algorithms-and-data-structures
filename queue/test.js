const Queue = require('./queue');

//Add elements
const q = new Queue();
q.enqueue('Jimmy');
q.enqueue('Golon');
q.enqueue('Handrix');
q.enqueue('Himmyng');
q.peek();

//Remove elements
q.dequeue();
q.peek();

//Verify size
q.size();

//Convert the element to string
q.toString();