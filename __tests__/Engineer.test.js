const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Josh', '123', 'josh@mail.com', 'jbeedle19');

    expect(engineer.name).toBe('Josh');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('josh@mail.com');
    expect(engineer.github).toBe('jbeedle19');
});

test("gets engineer's name", () => {
    const engineer = new Engineer('Josh', '123', 'josh@mail.com', 'jbeedle19');

    expect(engineer.getName()).toBe('Josh');
});

test("gets engineer's id", () => {
    const engineer = new Engineer('Josh', '123', 'josh@mail.com', 'jbeedle19');

    expect(engineer.getId()).toBe('123');
});

test("gets engineer's email", () => {
    const engineer = new Engineer('Josh', '123', 'josh@mail.com', 'jbeedle19');

    expect(engineer.getEmail()).toBe('josh@mail.com');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Josh', '123', 'josh@mail.com', 'jbeedle19');

    expect(engineer.getRole()).toBe('Engineer');
});

test("gets engineer's github username", () => {
    const engineer = new Engineer('Josh', '123', 'josh@mail.com', 'jbeedle19');

    expect(engineer.getGithub()).toBe('jbeedle19');
});