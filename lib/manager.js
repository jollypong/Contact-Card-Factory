const Employee = require('./Employee'); 
//child class Manager with office number

class Manager extends Employee {
    constructor(name, id, email, officeNumber){ 
        super(name, id, email);
        this.officeNumber = officeNumber; 
        this.role = 'Manager';
    }
    getOfficeNumber(){ 
        return this.officeNumber;
    }
    getRole(){
        return this.role
    }
}

module.exports = Manager; 