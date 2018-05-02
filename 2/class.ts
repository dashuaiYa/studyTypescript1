class Student {
    fullName: string;
    constructor(public firstName, public middleName, public lastName) {
        this.fullName = firstName + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Wang', 'Da', 'Shuai');

console.log(greeter(user));