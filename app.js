
// const person1 = {
//     name: 'Austin',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name} `);
//     }
// };
// person1.sayHello();


// const person2 = {
//     name: 'Tessa',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name} `);
//     }
// };
// person2.sayHello();


// const person3 = {
//     name: 'Susan',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name} `);
//     }
// };
// person3.sayHello();


// const person4 = {
//     name: 'Ken',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name} `);
//     }
// };
// person4.sayHello();


// const person5 = {
//     name: 'Lilah',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name}. `)
//     }
// }
// person5.sayHello();

// function Person (name, age, city) {
//     this.name = 'name';
//     this.age = 'age';
//     this.city = 'city';
// }

// Person.prototype.sayHello = function(){
//     console.log('Hey! My name is ' + this.name + '. I am  ' + this.age + ' years old, and live in ' + this.city +'')
// }
// const person11 = new Person(`Austin`, 22, `Trussville`);
// const person22 = new Person(`Tessa`, 22, `Trussville`);
// const person33 = new Person(`Ken`, 53, `Roebuck`);
// const person44 = new Person(`Susan`, 53, `Trussville`);
// const person55 = new Person(`Lilah`, 2, `Trussville`);

// person11.sayHello(); 
// person22.sayHello(); 
// person33.sayHello(); 
// person44.sayHello(); 
// person55.sayHello();

class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
        this.getDetails();
    }

    getDetails() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
    }
}

new Person("Austin", "Trussville", 22);
new Person("Tessa", "Trussville", 22);
new Person("Susan", "Trussville", 53);
new Person("Ken", "Trussville", 53);
new Person("Lilah", "Trussville", 2);

class Vehicle {
    constructor(manufacturer, numWheels, type) {
        this.manufacturer = manufacturer;
        this.numWheels = numWheels;
        this.type = type;
    }
    
    aboutVehicle() {
        console.log(`Type: ${this.type} \n Manufacturer: ${this.manufacturer} \n NumberOfWheels: ${this.numWheels}`);

    }
}

class Truck extends Vehicle {
    constructor(manufacturer, numWheels, doors) {
        super(manufacturer, numWheels, "truck");
        this.doors = doors;
        this.hasTruckBed = true;
    }

    aboutVehicle() {
        super.aboutVehicle();
        console.log(` Number of Doors: ${this.doors} \n hasTruckBed: ${this.hasTruckBed}`);
    }
}

new Vehicle("BMW", 4, "Sedan").aboutVehicle();
new Truck("Truck", 4, 4).aboutVehicle()