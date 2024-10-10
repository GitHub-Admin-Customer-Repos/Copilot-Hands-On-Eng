function bound(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        return originalMethod.apply(this, args);
    }.bind(target);
    return descriptor;
}

// Define the Person class
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Example usage
const person = new Person('Alice');
const greeting = `Hello, my name is ${person.name}!`;
console.log(greeting); // Output: Hello, my name is Alice!