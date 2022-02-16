const Employee = require('./employee'); 
//create child class engineer with github

class Engineer extends Employee {
    constructor(name, id, email, githubName){ 
        super(name, id, email);
        this.githubName = githubName; 
        this.role = 'Engineer';
    }
    getGithubName(){ 
        return this.githubName;
    }
    getRole(){
        return this.role; 
    }
}

module.exports = Engineer;