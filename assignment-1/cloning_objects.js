let person1 =  {
    firstName: "Sayan",
    lastName: "Bose",
    age: 21,
    address: {
        city: "Kolkata",
        pin: 702321,
    }
};

// Shallow Copy

// using assign

let person2 = Object.assign({}, person1);

console.log(person2.address.city); // Kolkata

person1.address.city = "Bangalore";

console.log(person2.address.city); // Bangalore

// using spread operator

let person3 = {...person1};

console.log(person3.address.city); // Bangalore

person1.address.city = "Pune";

console.log(person3.address.city); // Pune


// Deep Copy

// using JSON stringify and parse

let person4 = JSON.parse(JSON.stringify(person3));

console.log(person4.address.city); // Pune

person1.address.city = "Mumbai";

console.log(person4.address.city); // Pune