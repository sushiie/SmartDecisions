var nameVar = 'Susheel';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'John';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'tommy';
    return petName;
}

const petName = getPetName();
console.log(petName);


//Block scoping
const fullName = "Susheel Sharma";
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);