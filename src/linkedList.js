const linkedList = function () {
    class SingleListNode {
        constructor(data, nextPointer=null) {
            this.data = data;
            this.nextPointer = nextPointer;
        }
    }
    class DoubleListNode {
        constructor(data, nextPointer=null, previousPointer=null) {
            this.data = data;
            this.previousPointer = previousPointer;
            this.nextPointer = nextPointer;
        }
    }
    class linkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
        push(data) {
            this.addAt(this.size, data);
            return this.head;
        }
        pop() {
            this.removeAt(this.length-1);
        }
        addAtFirstPlace(data) {
            this.addAt(0, data);
            return this.head;
        }
        indexOf(item) {
            let node = this.head;
            for(let i=0; i<this.length; i++) {
                if(item === node.data) {
                    return i;
                }
                node = node.nextPointer;
            }
            return -1;
        }
        get data() {
            let node = this.head;
            while(node) {
                console.log('node  ', node.previousPointer && node.previousPointer.data);
                node = node.nextPointer;
            }
            return this.head;
        }
        get length() {
            return this.size;
        }
        get isEmpty() {
            return this.length === 0;
        }

    }

    class SingleLinkedList extends linkedList {
        constructor() {
            super();
        }
        removeAt(index) {
            if(index === 0) {
                this.head = this.head.nextPointer;
            } else {
                let node = this.head;
                let previousNode;
                for(let i=0; i<index; i++) {
                    previousNode = node;
                    node = node.nextPointer;
                }
                previousNode.nextPointer = node.nextPointer;
            }
            this.size--;
        }
        addAt(index=0, data) {
            let node;
            if(index === 0) {
                node = new SingleListNode(data);
                if (this.head) {
                    node = new SingleListNode(data, this.head);
                }
                this.head = node;
                this.size++;
            } else if(index === this.size) {
                node = new SingleListNode(data);
                if (!this.tail) {
                    this.head.nextPointer = node;
                } else {
                    this.tail.nextPointer = node;
                }
                this.tail = node;
                this.size++;
            } else if (index > 0 && index < this.size) {
                let nodeAt = this.head;
                for (let i=1; i< index; i++) {
                    nodeAt = nodeAt.nextPointer;
                }
                node = new SingleListNode(data, nodeAt.nextPointer);
                nodeAt.nextPointer = node;
                this.size++;
            }
        }
    }
    class DoublyLinkedList extends linkedList {
        constructor() {
            super();
        }
        addAt(index=0, data) {
            let node;
            if(index === 0) {
                node = new DoubleListNode(data);
                if (this.head) {
                    node = new DoubleListNode(data, this.head);
                }
                this.head = node;
                this.size++;
            } else if(index === this.size) {
                node = new DoublyLinkedList(data);
                if (!this.tail) {
                    node.previousPointer = this.head;
                    this.head.nextPointer = node;
                } else {
                    node.previousPointer = this.tail;
                    this.tail.nextPointer = node;
                }
                this.tail = node;
                this.size++;
            } else if (index > 0 && index < this.size) {
                let nodeAt = this.head;
                let previousNode = null;
                for (let i=1; i<=index; i++) {
                    nodeAt = nodeAt.nextPointer;
                    previousNode = nodeAt.previousPointer;
                }
                node = new DoubleListNode(data, nodeAt, nodeAt.previousPointer);
                nodeAt.nextPointer = node;
                this.size++;
            }
        }
    }
    return {
        singleLinkedList: SingleLinkedList,
        doublyLinkedList: DoublyLinkedList,
    }
}();
module.exports = linkedList;
