var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorFactory(string, func) {
    return function (constructor) {
        console.log("Name of Function passed to decorator is: \"" + func.name + "\"\nParameter passed to decorator is: \"" + string + "\"\nand class's name is: \"" + constructor.name + "\"");
    };
}
;
function methodDecorator(target, methodKey, descriptor) {
    console.log("Target is:" + target[methodKey] + ",\nMethod Key is: " + methodKey + " \nand Descriptor is: " + descriptor);
}
;
function funktion() { console.log("Just another function"); }
;
var Person = (function () {
    function Person(name, roll) {
        this.name = name;
        this.rollNo = roll;
    }
    Person.prototype.greet = function () {
        console.log("Hello " + this.name + ". Your Roll No is:" + this.rollNo);
    };
    ;
    __decorate([
        methodDecorator
    ], Person.prototype, "greet", null);
    Person = __decorate([
        decoratorFactory("parameter to decorator", funktion)
    ], Person);
    return Person;
}());
//# sourceMappingURL=decorators.js.map