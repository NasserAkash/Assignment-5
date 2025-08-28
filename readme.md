What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById Selects one element by its unique ID. Fastest method
getElementsByClassName Selects all elements with a class. Updates automatically if DOM changes.
querySelector is flexible CSS-style selector. Returns first match only.
querySelectorAll is flexible CSS-style selector. Returns all matches.


How do you create and insert a new element into the DOM?
first of all i create a element such as "div"
then set some attributes as: "hello world"
then  call the container and appendChild the attribute into the DOM. 


What is Event Bubbling and how does it work?
When you click an element, the event happens on that element first.
Then it “bubbles up” to its parent, then grandparent, all the way to the top of the page.



What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to multiple child elements. The parent “delegates” the event handling to its children using the event’s target.


What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the browser’s default action.
stopPropagation() stops the event from bubbling up to ancestors.