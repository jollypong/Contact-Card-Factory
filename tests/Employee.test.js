// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

const Employee = require("../lib/Employee");

describe('check Employee methods', () => {
    describe('check getName', () => {
        it('confirms name input', () => {
            const employee = new Employee("joe", 69, "joemail@leemail.com");
            expect(employee.getName()).toEqual("joe");
        });
    });

    describe('check getID', () => {
        it('confirms id is number', () => {
            const employee = new Employee("joe", 69, "joemail@leemail.com");
            expect(employee.getID()).toEqual(expect.any(Number));
        });

        it('confirms id input value is a number', () => {
            const employee = new Employee("joe", 69, "joemail@leemail.com");
            expect(employee.getID()).toEqual(69);
        });
    });

    describe('check getEmail', () => {
        it('confirms email input', () => {
            const employee = new Employee("joe", 69, "joemail@leemail.com");
            expect(employee.getEmail()).toEqual("joemail@leemail.com");
        });
    });

    describe('check getRole', () => {
        it('confirms the Role', () => {
            const employee = new Employee("joe", 69, "joemail@leemail.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});