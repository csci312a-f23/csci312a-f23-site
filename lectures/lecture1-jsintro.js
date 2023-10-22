5 == "5"
5 === "5"


function varTest() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);  // What will print here?
}
varTest();

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);  // What will print here?
}
letTest();

const m = [4,6,2,7];
for (let i = 0; i < m.length; i++) {
  console.log(m[i]);
}

m.forEach(function(i) { console.log(i); });

m.forEach((i) => console.log(i));


const a = [4,6,7,9];
a.map(item => item + 1);

const map = (a, f) => {
  let result = [];
  a.forEach((item) => {
    result.push(f(item));
  });
  return result;
}
map(a, item => item + 1);

const init = () => {
  let name = "CS312";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();


let current=Date.now();
setTimeout(() => { 
  console.log("Time elapsed (ms): " + (Date.now() - current))
}, 100);
current = new Date('12 Feb 2018')
console.log("First?")

let current=Date.now();
setTimeout((past) => { 
  console.log("Time elapsed (ms): " + (Date.now() - past))
}, 100, current);
current = new Date('12 Feb 2018')
console.log("First?")

let current=Date.now();
const setTimeoutWrapper = (past) => {
  setTimeout(() => { 
    console.log("Time elapsed (ms): " + (Date.now() - past))
  }, 100);
}
setTimeoutWrapper(current);
current = new Date('12 Feb 2018')
console.log("First?")


var funcs = [];
for (var i = 0; i < 3; i++) {      // Create 3 functions and
  funcs[i] = () => {          // store them in the funcs array,
    console.log("My value: " + i); // each should log its value.
  };
}
for (var j = 0; j < 3; j++) {
  funcs[j]();                      // Run each function to print values
}


let square = {
  x: 20,
  y: 20,
  width: 10,
  height: 25,
  aspectRatio: () => { this.width / this.height }
};


// ES6 classes
class Hello {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return 'Hello ' + this.name + '!';
  }

  static sayHelloAll() {
    return 'Hello everyone!';
  }
}

class HelloWorld extends Hello {
  constructor() {
    super('World');
  }

  echo() {
    console.log(super.hello());
  }
}

var hw = new HelloWorld();
hw.echo();
hw.hello();

console.log(Hello.sayHelloAll());

// ES5 "classes"
function Hello(name) {
  this.name = name;
}

Hello.prototype.hello = function hello() {
  return 'Hello ' + this.name + '!';
};

Hello.sayHelloAll = function () {
  return 'Hello everyone!';
};

function HelloWorld() {
  Hello.call(this, 'World');
}

HelloWorld.prototype = Object.create(Hello.prototype);
HelloWorld.prototype.constructor = HelloWorld;
HelloWorld.sayHelloAll = Hello.sayHelloAll;

HelloWorld.prototype.echo = function echo() {
  console.log(Hello.prototype.hello.call(this));
};

var hw = new HelloWorld();
hw.echo();
hw.hello();

console.log(Hello.sayHelloAll());


const counter = () => {
  let count = 0;
  return () => count++;
}
