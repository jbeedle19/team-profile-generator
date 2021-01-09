const Employee = require('../lib/Employee');
// Solution has the employee id as a number and not string
// Will this cause and issue later?

test('creates an employee object', () => {
    const employee = new Employee('Josh', '123', 'josh@mail.com');

    expect(employee.name).toBe('Josh');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('josh@mail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Josh');

    expect(employee.getName()).toBe('Josh');
});

test("gets employee's id", () => {
    const employee = new Employee('Josh', '123', 'josh@mail.com');

    expect(employee.getId()).toBe('123');
});