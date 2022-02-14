const Team = require('./team'); 
//child class Manager with office number

class Manager extends Team {
    constructor(name, id, email, officeNumber){ 
        super(name, id, email);
        this.officeNumber = officeNumber; 
    }
    getOfficeNumber(){ 
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager; 