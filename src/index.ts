
// standard variables
let variable:boolean = true;

function adder(number1:number, number2:number): number {

    return number1 + number2 + 5;
}

// interfaces
interface User {
    firstName: string,
    lastName: string,
    isAdmin: boolean
}

var johnDoe:User = {
    firstName: "John",
    lastName: "Doe",
    isAdmin: false
};

// arrow functions
let PrintUserName: (currentUser) => string;

PrintUserName = (testUser:User) => {

    let fullName = testUser.firstName + " " + testUser.lastName;

    console.log("Full Name: " + fullName);

    return fullName;
};

// classes
class SecurityUser {
    
    Permissions: string;

    constructor(permissions:string) {
        this.Permissions = permissions; 
    }

    protected WritePermissions() {
        console.log("Permissions: " + this.Permissions);
    }
}

// inheritances
class ApplicationUser extends SecurityUser implements User {
    
    firstName: string;
    lastName: string;
    isAdmin: boolean;

    constructor() {
        super("I'm an Admin!");
    }

    TestPermissions(){
        this.WritePermissions();
    }
}

let testApplicationuser = new ApplicationUser();

testApplicationuser.TestPermissions();

// console log
console.log("Test");
console.log("Adder: " + adder(5, 4));