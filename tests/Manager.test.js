// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

const Manager = require('../lib/Manager')

describe('check Manager methods', () => {
    describe('check getOfficeNumber',()=> {
        it('confirms githubName', ()=> {
            const manager = new Manager("joe", 69, "joemail@leemail.com", "1234567890");
            expect(manager.getOfficeNumber()).toEqual("1234567890")
        })
    })

    describe('check getRole', () => {
        it('confirms the Role', () => {
            const manager = new Manager("joe", 69, "joemail@leemail.com", "1234567890");
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});