class User {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.gender = gender;
        this.aboutMe = aboutMe;
        this.email = email;
        this.password = password;
    } 
       
} 
function calculateAge(birthYear) {
    return 2020 - birthYear; 
}
var ageUser1 = calculateAge(birthYear);
var ageUser2 = calculateAge(birthYear);
