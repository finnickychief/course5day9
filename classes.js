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

  Shape - 
    properties:
      number of Sides
      color
      size - List of properties for that type of object
      Circle would have radius, rectangle would have width and length, prism would also height

    Functions
      getArea
      getVolume

  let circle = new Shape();

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












*/
