function greeter(person) {
    return 'Hello ' + person.firstName + person.lastName;
}
var user = {
    firstName: 'wang',
    lastName: 'shuai'
};
console.log(greeter(user));
