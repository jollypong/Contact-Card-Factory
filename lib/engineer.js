const Team = require('./team'); 

class Engineer extends Team {
    constructor(name, id, email, role, githubName){ 
        super(name, id, email);
        this.role = "Engineer";
        this.githubName = githubName; 
    }
    getGithubName(){ 
        return this.githubName;
    }
    getRole(){
        return this.role
    }
}

module.exports = Engineer;