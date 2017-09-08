//Decorator factory defined to pass userdefined parameter to decorator
function decoratorFactory(string: string, func: Function) {
    return function (constructor: Function) {
        console.log(`Name of Function passed to decorator is: "${(<any>func).name}"
Parameter passed to decorator is: "${string}"
and class's name is: "${(<any>constructor).name}"`);
    }
};

//Method Decorator which decorates the greet method in Person class and logs the details to console
function methodDecorator(target: any, methodKey: string, descriptor?: PropertyDescriptor) {
    console.log(`Target is:${target[methodKey]},
Method Key is: ${methodKey} 
and Descriptor is: ${descriptor}`);
};

//function which is passed to the decorator as parameter
function funktion() { console.log(`Just another function`) };

//Class Persond defined and decorated with the decorator factory function
@decoratorFactory("parameter to decorator", funktion)
class Person {
    name: string;
    rollNo: number;
    constructor(name: string, roll: number) {
        this.name = name;
        this.rollNo = roll;
    }
    //method greet decorated with methodDecorator
    @methodDecorator greet(): void {
        console.log(`Hello ${this.name}. Your Roll No is:${this.rollNo}`);
    };
}

