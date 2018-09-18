/*
  Classes 

  One of the primary pieces of Object Oriented Programming( or OOP ).

  Classes are a way to impose order on objects within programming languages.

  Some examples of class-like objects would be:
  Array, Date, XMLHttpRequest, Image, Audio

  Each one of these are built upon the idea of an Object.

  Most of the operations you would do with objects will also apply to classes. 


  The structure of a class:

  To make a class called Animal, you would type the following:
    class Animal {};

  To create a new object with that class, type the following:
    let dog = new Animal();

  To tell the class on the object you're working with, you can use the instanceof keyword
  dog instanceof Animal // Returns true
  dog instanceof Object // Also true, because all classes are objects
  dog instanceof Array // False, dog is not an instance of Array

  To provide values to a class when you're creating it, you need to add what is known as a constructor. This is run every time you create a new instance of the class, for that new object being created.

  class Animal {
    constructor(){
      console.log('Hello from the constructor');
    }
  }
  let dog = new Animal(); // We will get a console log from the constructor

  To add parameters to your declaration, such as the following line:
  let dog = new Animal('canine', 4); // Make an animal of type canine with 4 legs

  Add code that handles those parameters within the constructor. To define new properties within the constructor(as well as within any other methods later) you need to use the 'this' keyword. In this case, 'this' refers to that instance of Animal

  class Animal {
    constructor(type, numLegs, noise, name){
      this.type = type;
      this.numLegs = numLegs;
      this.noise = noise;
      this.name = name;
    }
    // Add additional methods the same way you added the constructor, only now use just the method name.
    speak(){
      console.log(`${this.name} says ${this.noise}`);
    }

    walk(){
      console.log(`${this.name} walks on ${this.numLegs} legs`);
    }
  }

  A note for methods on classes:
    Just like prototypical inheritance, the methods on classes create only ONE copy of the method. Each new instantiation of the class refers to the same method, they do not create their own to use.
  
  Taking care of parameters that are left out of methods
  An issue with creating functions(and classes) is that sometimes we want users to have optional parameters. To add default values to any function, you can set a default value in the parameter list
  function sayHello(name = 'John Doe'){
    console.log(name);
  }

  If the name is left out when the function is called, the name will default to 'John Doe'

  The main issue with using default parameters is that order matters with function parameters. 

  let dog = new Animal('canine', 4, 'Rex');
  dog.speak() // undefined says Rex - not what we intended for the name or sound

  // Two ways to fix:
  constructor(type='animal', numLegs = 2, noise = 'Unknown', name = 'Fluffy');
  Leave off the noise:
  let dog = new Animal('canine', 4, undefined, 'Rex'); 
  This is cumbersome when writing new declarations of our object.

  // OR - Instead of passing an argument list, pass in an object when creating an instance of the class
  constructor(options){
    this.type = options.type || 'animal'; // If options.type exists, use that value. Otherwise, default to animal
    this.numLegs = options.numLegs || 2;
    this.noise = options.noise || 'Unknown';
    this.name = options.name || 'Fluffy';
  }

  let dog = { // Put in as many or as few properties as you want to to set it up. AND the order does not matter
    name: 'Rex',
    numLegs: 4,
  }
  dog = new Animal(dog);



  Animal - 

  Circle - 
    properties:
      number of Sides - Useful for other shapes
      color
      size/radius
      

    Functions
      getArea
      getVolume - Would be useful for 3d shapes

  let circle = new Circle();

  Vehicle -
    properties:
      make
      model
      numWheels
      price
      year
      color
      type
      transmission
      vin

  let car = new Vehicle()



  class Circle {
    constructor(radius, color){
      this.radius = radius;
      this.color = color;
      this.area = radius**2 * Math.PI;
      this.diameter = radius * 2;
    }

    getArea() {
     // return Math.PI * this.radius**2; // pre setRadius
      return this.area;
    }

    getDiameter() {
      return this.diameter;
    }
    
    // Accessors ( getters ) and Mutators ( setters )
    getRadius(){ // getter
      return this.radius;
    }
    setRadius(newRadius){ // setter
      this.radius = newRadius;
      this.area = newRadius**2 * Math.PI; // Calculate only when the radius is changed to save on operations whenever we need to use the area
      this.diameter = newRadius * 2;
    }
  }

  class Vehicle {
    constructor(vehicle){ // vehicle will be an object
      // this.make = typeof vehicle.make === 'string' ? vehicle.make : 'Please give me a String' // Not particularly effective validation
      this.make = vehicle.make || ''
      this.model = vehicle.model || ''
      this.numWheels = vehicle.numWheels || ''
      this.price = vehicle.price || ''
      this.year = vehicle.year || ''
      this.color = vehicle.color || ''
      this.type = vehicle.type || ''
      this.transmission = vehicle.transmission || ''
      this.vin = vehicle.vin || ''
    }

    toString(){
      return `This vehicle is of make: ${this.make}`;
    }

  }

  let vehicle = {make: 'chevy', model: 'cavalier', year: 2000, color: 'white'}

  vehicle = new Vehicle(vehicle);

  Create a class RectangularPrism:
    properties:
      width, height, length

    methods:
      get/set on each of the properties
      getVolume
      toString - return a string representation of the object

 
  







*/

class RectangularPrism {
  constructor(width, length, height) {
    this.width = width;
    this.length = length;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }
  setWidth(newWidth) {
    this.width = newWidth;
  }
  getLength() {
    return this.length;
  }
  setLength(newLength) {
    this.length = newLength;
  }
  getHeight() {
    return this.height;
  }
  setHeight(newHeight) {
    this.height = newHeight;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }

  toString() {
    // Generate a String representation of the object
    return `This RectangularPrism has a width of ${this.width}, a length of ${
      this.length
    } and a height of ${this.height}. Its volume is ${this.getVolume()}.`;
  }
}

/*
  Lab: 
    Create a class to encompass the individual zodiac animal Cards from yesterday's application. 
    The class should contain all of the information necessary to generate a DOM element for an animal, as well as methods to set and get the properties, and a method to retrieve the DOM representation altogether.

    Current steps:
      Create a div <--- THIS will be the element you generate with your class
      Create animal image
      Create chinese character image
      Create sound Icon
      Add english/pinyin names
      Generate year list

    Information tied to each card:
      eng, chi, pin, year

      method to build out the HTML element that represents the card


*/
