const Team = require('./team'); 
//create child class intern with school 

class Intern extends Team {
    constructor(name, id, email, school){ 
        super(name, id, email);
        this.school = school; 
        this.role = 'Intern';
    }
    getSchool(){ 
        return this.school;
    }
    getRole(){
        return this.role; 
    }
}

module.exports = Intern;