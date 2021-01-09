const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Josh');

    expect(employee.name).toBe('Josh');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});