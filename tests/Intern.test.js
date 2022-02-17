// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'

const Intern = require('../lib/Intern')

describe('check Intern methods', () => {
    describe('check getSchool',()=> {
        it('confirms githubName', ()=> {
            const intern = new Intern("joe", 69, "joemail@leemail.com", "Viridian City School");
            expect(intern.getSchool()).toEqual("Viridian City School")
        })
    })

    describe('check getRole', () => {
        it('confirms the Role', () => {
            const intern = new Intern("joe", 69, "joemail@leemail.com", "Viridian City School");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});