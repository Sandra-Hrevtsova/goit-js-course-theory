1. OOP (Object-Oriented Programming)
- class
- exemplar (object - child of class)
- Interface - collection of props and methods of class

2. Prototype inheritance
- __proto__
- [[Prototype]]

3. Create object with prototype
- Object.create(parentObject)

4. Check prototype
- parentObject.isPrototypeOf(childObject); // true || false
- childObject.hasOwnProperty('propName'); // true || false

5. Classes (ES6 or ECMAScript2015)
- create class

class User {
    <!-- statis props and methods (only for class used) -->
    <!-- private properties # -->
    constructor(...params) {
        <!-- all properties -->
    }
    <!-- accessors -->
    <!-- methods -->
}

- create exemplar of class
const user = new User(arg1, ..., argN)

- inheritance of classes

class Banana extends Fruit {
    constructor(parentProps, ...rest){
        super(parentProps)
        <!-- all properties for current class -->
    }
}