const Team = require('./team'); 

class Manager extends Team {
    constructor(name, id, email, role, officenumber){ 
        super(name, id, email);
        this.role = 'Manager';
        this.officeNumber = officeNumber; 
    }
    getOfficeNumber(){ 
        return this.officeNumber;
    }
    getRole(){
        return this.role
    }
}

module.exports = Manager; 