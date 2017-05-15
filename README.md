# Object Lab

We've worked with objects before. Up until this point, we've mostly dealt with *object literals*, objects that are declared on demand. Here is an example:
```
var person = {
    name: 'John Doe',
    email: 'john@test.com'
};
```
With an object literal, we are limited in our re-use of the object for other purposes. Sure, we can change the name, email, or add a completely new property:
```
person.name = 'Jane Doe';
person.email = 'jane@test.com';
person.phone = '555-0125';
```
The only problem is, anywhere else in the code that was using the `person` variable now sees the data for Jane. We have in effect destroyed John's data.

## Another Kind of Object
In modern programming, we frequently use a concept called Object Oriented Programming (OOP). Historically it has had little use for web programming, which is why some features of it are lacking in JavaScript.

That is changing, however, with the more widespread use of TypeScript and the advancement of JavaScript. Many employers look for applicants having experience in OOP, so it's important that you get practice using it and understanding it.

### What is a class?
At the core of OOP is the concept of Classes. These have nothing to do with CSS classes. You can think of a Class as a re-usable blueprint for making *instances* of that class. We call these instances *objects*.

### Implementing OOP in JavaScript
In JS, we accomplish OOP using functions. We name these functions starting with a capital letter to follow the standard that class names should start with capital letters.

Consider our person object literal above. We can accomplish the same task with the following code:
First, we need to set up a Person class. This is done just once in your code.
```
var Person = function(name, email) {
    this.name = name;
    this.email = email;
}
Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name + ' and my email is ' + this.email + '.');
}
```
Now, anywhere else in our code that can "see" the Person variable (remember **scope**), can create new instances of the Person object.
This is accomplished by using the special keyword **new**.
```
var somePerson = new Person('Some Name', 'Some Email');
```
Now, you can access whatever properties and functions were set on the Person class as follows:
```
somePerson.name // value is Some Name
somePerson.email // value is Some Email
somePerson.sayHello() // executes the sayHello function
```

# Object Lab
This lab will combine principles of HTML, CSS, JavaScript, Accessing/Creating/Modifying HTML elements, and Objects.
1. As with all your labs, start a new GitHub repository and clone it. That is where you will be working.
2. Create an index.html file, a JS file, and a CSS or LESS file (the choice is yours).
3. Implement the objectives of the lab as follows:
    * The page must contain a button labeled Add Dice (or use Die if you want to be proper). You can go ahead and put this in your HTML. (yay!)
    * Clicking the button should add a die onto the page, labeled with a random integer ranging from 1-6.
    * The dice should show up on your page in a grid, similar to the layout of the DOM lab.
    * The page must contain a button labeled Roll Dice, which should cause all the dice on the screen to `roll`, updating their values.
    
**General Requirements**
* You must use OOP. Create a class named Die that represents a single die.
* Your class must have a property `value`.
* Your class must have a function called `roll` that generates a random integer 1-6, sets the value property, and returns the number.
* You can use either the DOM, JQuery, or a combination of both.

*Hints*
* You can set a property on your Die object that holds the Div representing the die on the page. Example: die.htmlElement = some_reference_to_the_HTML_div
* You can use a global array in your JS file that contains each die object you create.
* Clicking the `Roll Dice` button can loop through that array, where you will have access to the properties and functions of each instance of Die.

**_Extra Credit_**
Try extending the functionality of this lab to support the following features. They are listed in order from easiest to hardest to implement.
* Create a `sumDice` function and a button that triggers it. It should add up the current face value of all the dice on the page and display an alert with the sum.
* Add a feature where clicking on a die on the page causes just that one die to roll, updating its face value
* Add a feature where double clicking on a die on the page causes that die to be removed from the page (remember to remove the die object from any arrays it may be in too).
