const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Josh', '123', 'josh@mail.com', 'A1');

    expect(manager.name).toBe('Josh');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('josh@mail.com');
    expect(manager.officeNumber).toBe('A1');
});

test("gets manager's name", () => {
    const manager = new Manager('Josh');

    expect(manager.getName()).toBe('Josh');
});

test("gets manager's id", () => {
    const manager = new Manager('Josh', '123', 'josh@mail.com');

    expect(manager.getId()).toBe('123');
});

test("gets manager's email", () => {
    const manager = new Manager('Josh', '123', 'josh@mail.com');

    expect(manager.getEmail()).toBe('josh@mail.com');
});

test("gets manager's role", () => {
    const manager = new Manager('Josh', '123', 'josh@mail.com');

    expect(manager.getRole()).toBe('Manager');
});