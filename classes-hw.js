const output = document.getElementById('output');
const buttons = document.getElementById('buttons');

// USE THIS LOG FUNCTION TO OUTPUT TO THE PAGE.
// THINK OF IT LIKE A CONSOLE.LOG() BUT ON THE PAGE :)

function log(text) {
  output.textContent += text + "\n";
}

function clearLog() {
  output.textContent = '';
}

const problems = [
  function problem1() {
    // Problem 1:
    // Create a class called Calculator with two methods:
    //  - add(x, y): returns the sum of x and y
    //  - subtract(x, y): returns the result of x minus y
    // Then create an instance and call both methods.

    // Write your class and code here
    class Calculator {
      add(x,y) {
        return x+y
      }
      subtract(x,y) {
        return x-y
      }
    }

    const calc = new Calculator();
    log("Add: " + calc.add(4,2))
    log("Subtract: " + calc.subtract(4,2))
  },
  function problem2() {
    // Problem 2:
    // Create a class called Person with two methods:
    //  - setName(name): sets a property called name
    //  - getName(): returns the name
    // Then create an instance, set the name to your name, and log it using getName().

    // Write your class and code here
    class Person{      
      setName(name){
        this.name = name
      }
      getName(){
        return this.name
      }
    }

    const p1 = new Person()
    p1.setName("Biruk")
    log(`Name: ${p1.getName()}`)
  },
  function problem3() {
    // Problem 3:
    // Create a class called Bird with a method fly() that logs "Flying"
    // Create a class called Penguin that extends Bird and overrides the fly() method to log "Penguins can't fly"
    // Then create one Bird and one Penguin, and call their fly() methods.

    // Write your class and code here
    class Bird {
      fly(){
        log(`Flying`)
      }
    }
    class Penguin extends Bird{
      fly(){
        log("Penguins can't fly")
      }
    }

    const eagle = new Bird()
    eagle.fly()
    const peng1 = new Penguin()
    peng1.fly()
  },
  function problem4() {
    // Problem 4:
    // Create a base class called Shape with a method describe() that logs "I'm a shape"
    // Create two subclasses: Circle and Square
    // - Circle's describe() method logs "I'm a circle"
    // - Square's describe() method logs "I'm a square"
    // Then create instances of Circle and Square and call their describe() methods.

    // Write your class and code here
    class Shape{
      describe(){
        log("I'm a shape")
      }
    }
    class Circle {
      describe(){
        log("I'm a circle")
      }
    }
    class Square{
      describe(){
        log("I'm a square")
      }
    }

    const circ = new Circle()
    circ.describe()
    const sqr = new Square()
    sqr.describe()
  },
  function problem5() {
    // Problem 5:
    // Create a class called Employee with a method work() that logs "Working..."
    // Create a subclass called Manager that has an additional method hireEmployee() that logs "Employee hired"
    // Then create an instance of Manager, and call both methods.

    // Write your class and code here
    class Employee{
      work(){
        log("Working")
      }
    }

    class Manager extends Employee{
      hireEmployee(){
        log("Employee hired")
      }
    }
    const boss = new Manager()
    boss.work()
    boss.hireEmployee()
  }
];

problems.forEach((fn, index) => {
  const btn = document.createElement('button');
  btn.textContent = `Run Problem ${index + 1}`;
  btn.addEventListener('click', () => {
    clearLog();
    fn();
  });
  buttons.appendChild(btn);
});
