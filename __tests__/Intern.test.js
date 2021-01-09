const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Josh', '123', 'josh@mail.com', 'UPenn');

    expect(intern.name).toBe('Josh');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('josh@mail.com');
    expect(intern.school).toBe('UPenn');
});

test("gets intern's name", () => {
    const intern = new Intern('Josh', '123', 'josh@mail.com', 'UPenn');

    expect(intern.getName()).toBe('Josh');
});

test("gets intern's id", () => {
    const intern = new Intern('Josh', '123', 'josh@mail.com', 'UPenn');

    expect(intern.getId()).toBe('123');
});

test("gets intern's email", () => {
    const intern = new Intern('Josh', '123', 'josh@mail.com', 'UPenn');

    expect(intern.getEmail()).toBe('josh@mail.com');
});

test("gets intern's role", () => {
    const intern = new Intern('Josh', '123', 'josh@mail.com', 'UPenn');

    expect(intern.getRole()).toBe('Intern');
});

test("gets name of intern's school", () => {
    const intern = new Intern('Josh', '123', 'josh@mail.com', 'UPenn');

    expect(intern.getSchool()).toBe('UPenn');
});