// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithubName()
// getRole()—overridden to return 'Engineer'

const Engineer = require('../lib/Engineer')

describe('check Engineer methods', () => {
    describe('check getGithubName',()=> {
        it('confirms githubName', ()=> {
            const engineer = new Engineer("joe", 69, "joemail@leemail.com", "bulbasaur001");
            expect(engineer.getGithubName()).toEqual("bulbasaur001")
        })
    })

    describe('check getRole', () => {
        it('confirms the Role', () => {
            const engineer = new Engineer("joe", 69, "joemail@leemail.com", "bulbasaur001");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});