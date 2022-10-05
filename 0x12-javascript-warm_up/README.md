# 0x12-javascript-warm_up

# Mes notes javascript

- JavaScript (invented by Brendan Eich) is a programming language that adds interactivity to your website.
- behavior of responses when buttons are pressed or with data entry on forms; with
dynamic styling; with animation, etc. 
- JavaScript is case sensitive. This means myVariable is not the same as myvariable. If you have problems in your code, check the case!
- === test value and type and == test value
- I think it is a weak type because you don't have you specify the type of data the variable should hold.
ex: const num = or int num = 2
- function : arg and value. we can use return in fucntion. if we don't return everthing we return undefiended
- let is local
- exports and require
# Functions js

- querySelector() to grab a reference to your heading, and then store it in a variable called myHeading

- let myVariable;
- A semicolon at the end of a line indicates where a statement ends. It is only required when you need to separate statements on a single line. 
- /*
- Everything in between is a comment.
- */
- // This is a comment
- = = = (Strict equality) This performs a test to see if two values are equal. It returns a true/false (Boolean) result.

- !, !== (Not, Does-not-equal) This returns the logically opposite value of what it precedes.
- typeof myNumber;
- The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.
- JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it.
- For postfix unary operators (namely, ++ and --), the same rules apply. 
-  var-declared variables are not block-scoped, but are scoped to the containing function or script, and the effects of setting them persist beyond the block itself.
- JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford.
- JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.{"uno":"text"}
- Arrays as JSON
Above we mentioned that JSON text basically looks like a JavaScript object inside a string. We can also convert arrays to/from JSON. Below is also valid JSON, for example: [{"uno":"text"} ]

### await vs async

- we'll just say that we need to add the keyword async before the name of the function that uses the fetch API, 
- And add the keyword await before the calls to any asynchronous functions.
# statements

### Conditionals
- Conditionals are code structures used to test if an expression returns true or not.  A very common form of conditionals is the if...else statement.

- Block statements are commonly used with control flow statements (if, for, while).
- if...else statement
- switch statement

### Exception handling statements
- You can throw exceptions using the throw statement and handle them using the try...catch statements.

- throw statement (Use the throw statement to throw an exception. A throw statement specifies the value to be thrown: throw expression;)
- try...catch statement ???
### Functions
- Functions are a way of packaging functionality that you wish to reuse.

### Events
- Real interactivity on a website requires event handlers.

- There's an alternative way of writing anonymous functions, which we call an arrow function. An arrow function uses () => instead of
function ():
exemple: 
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});

### Array methods - map / filter / reduce / find
Map, filter, reduce and find are array methods that are coming from a programming paradigm named functional programming.

To sum it up:

Array.prototype.map() takes an array, does something on its elements and returns an array with the transformed elements.
Array.prototype.filter() takes an array, decides element by element if it should keep it or not and returns an array with the kept elements only
Array.prototype.reduce() takes an array and aggregates the elements into a single value (which is returned)
Array.prototype.find() takes an array, and returns the first element that satisfies the provided condition.
I recommend to use them as much as possible in following the principles of functional programming because they are composable, concise and elegant.

With those four methods, you can avoid the use of for and forEach loops in most situations. When you are tempted to do a for loop, try to do it with map, filter, reduce and find composed. You might struggle to do it at first because it requires you to learn a new way of thinking, but once you've got it things get easier.

### Spread operator "..."
The spread operator ... has been introduced with ES2015 and is used to expand elements of an iterable (like an array) into places where multiple elements can fit.

function myFunc(x, y, ...params) {
  console.log(x);
  console.log(y);
  console.log(params)
}

myFunc("a", "b", "c", "d", "e", "f")
// "a"
// "b"
// ["c", "d", "e", "f"]

### In a ternary evaluation
myVar ? "truthy" : "falsy"

### Promises
A promise is an object which can be returned synchronously from an asynchronous function (ref).

Promises can be used to avoid callback hell, and they are more and more frequently encountered in modern JavaScript projects.

To handle that kind of situation, ES2015 has given us promises. Promises can have three different states:

Pending
Fulfilled
Rejected
Let's say we want to use promises to handle an Ajax request to fetch the resource X.


# let vs var

- The design of var is confusing and error-prone. So let was created in modern versions of JavaScript, a new keyword for creating variables that works somewhat differently to var, fixing its issues in the process.
- For a start, if you write a multiline JavaScript program that declares and initializes a variable, you can actually declare a variable with var after you initialize it and it will still work
- Secondly, when you use var, you can declare the same variable as many times as you like, but with let you can't
- For these reasons and more, we recommend that you use let in your code, rather than var

# let or const
- In fact const is very useful. If you use const to name a value, it tells anyone looking at your code that this name will never be assigned to a different value. Any time they see this name, they will know what it refers to.

- In this course, we adopt the following principle about when to use let and when to use const: Use const when you can, and use let when you have to.

- This means that if you can initialize a variable when you declare it, and don't need to reassign it later, make it a constant.

# An aside on variable naming rules
- using Latin characters (0-9, a-z, A-Z) and the underscore character

# operator

- You can use the operators +, *, -, **, and % with BigInts—just like with Numbers. A BigInt is not strictly equal to a Number, but it is loosely so.

- A BigInt behaves like a Number in cases where it is converted to boolean: if, ||, &&, Boolean, !.

### Classes and instances
- Now that we have a constructor, we can create some professors. 
- Programming languages often use the keyword **new** to signal that a constructor is being called.
- When we model a problem in terms of objects in OOP, we create abstract definitions representing the types of objects we want to have in our system. For example, if we were modeling a school, we might want to have objects representing professors. Every professor has some properties in common: they all have a name and a subject that they teach. Additionally, every professor can do certain things: they can all grade a paper and they can introduce themselves to their students at the start of the year, for example.
class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

- Inherence => class Professor : extends Person (We use the extends keyword to say that this class inherits from another class)
- pratt = new Person("Pratt");
- we can prevent other code from accessing an object's internal state by marking some properties as private. (change this #year;)
- In this class declaration, #year is a private data property. We can construct a Student object, and it can use #year internally, but if code outside the object tries to access #year the browser throws an error:
- Private methods
You can have private methods as well as private data properties. Just like private data properties, their names start with #, and they can only be called by the object's own methods:



### PATTERN 1: DEFINE A GLOBAL

// foo.js
    foo = function () {
      console.log('foo!');
    }

// app.js
    require('./foo.js');
    foo();

### PATTERN 2: EXPORT AN ANONYMOUS FUNCTION

 module.exports = function () {
      console.log('bar!');
    }
 

### links
[js Cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet)

[links ressources](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
