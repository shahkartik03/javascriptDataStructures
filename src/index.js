let linkedList = require('./linkedList');
const ll = new linkedList.doublyLinkedList;
ll.addAt(0, 'd1');
ll.addAt(1, 'd2');
// ll.addAtFirstPlace('firstData');
// ll.push('pushData');
ll.addAt(2, 'd3');
ll.addAt(3, 'd4');
// ll.addAt(4, 'd5');
// ll.addAt(3, 'newData');
console.log('ll 1', ll.data);
// ll.pop();
// ll.removeAt(5);
// console.log('ll 2', ll.data);