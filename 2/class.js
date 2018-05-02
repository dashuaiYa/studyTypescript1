var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.fullName;
}
var user = new Student('Wang', 'Da', 'Shuai');
console.log(greeter(user));
