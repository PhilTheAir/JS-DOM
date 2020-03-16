// Create a DOM element
const el = document.createElement('div');

// Get and set the HTML content of an element
el.innerHTML = '<p>Hello World!</p>';
// or
const textNode = document.createTextNode('Hello World!'); el.appendChild(textNode);

// replace el with newEL 
el.parentNode.replaceChild(newEl, el);

// Unwrap a DOM element
const el = document.querySelector('div');
// get the element's parent node 
const parent = el.parentNode;
// move all children out of the element 
while (el.firstChild) parent.insertBefore(el.firstChild, el);
// remove the empty element 
parent.removeChild(el);

// Empty an element's content
el.innerHTML = '';

// Removing an element
el.parentNode.removeChild(el);

// insert after
el.parentNode.insertBefore(newEl, el.nextSibling);

// Get the text content of an element
const text = el.textContent;

// Append an element
el.innerHTML += '<p>Hello World!</p>';
// or
el.appendChild(newEl);
// or
el.insertBefore(newEl, null);

// Prepend an element
el.innerHTML = '<p>Hello World!</p>' + el.innerHTML;
// or
el.insertBefore(newEl, el.childNodes[0] || null);

// Wrap an HTML structure around an element
el.parentNode.insertBefore(wrapper, el);
// move el into wrapper 
wrapper.appendChild(el);

// Clone an element
const fooWithChildren = el.cloneNode(true);
const fooWithoutChildren = el.cloneNode(false);

// Iterating over a list of selected elements
const divs = document.querySelectorAll('div');
divs.forEach(item => {
  item.style.color = "green";
});

// Querying the DOM
// NOT LIVE
const myElement = document.querySelector('#foo > div.bar')
myElement.matches('div.bar') === true
const myElements = document.querySelectorAll('.bar')
// iterate myElements which is a NodeList
Array.from(myElements).forEach(doSomethingWithEachElement)

// Modifying Classes and Attributes
myElement.classList.add('foo');
myElement.classList.remove('bar');
myElement.classList.toggle('baz');
// the .getAttibute(), .setAttribute() and .removeAttribute(). 
// can directly modify the HTML attributes (as opposed to the DOM properties) of an element, 
// thus causing a more expensive browser redraw than just setting DOM properties

myElement.addEventListener('click', e => {
  console.log(e.type + ' got fired');
})

myElement.addEventListener('click', e => {
  console.log(e.type + ' got fired again');
})

// Event delegation
myForm.addEventListener('change', e => {
  const target = e.target;
  if (target.matches('input')) {
    console.log(target.value);
  }
})

// window.requestAnimationFrame() to schedule all current changes 
// to the next browser repaint frame
const start = window.performance.now();
const duration = 2000;

window.requestAnimationFrame(function fadeIn(now) {
  const progress = now - start;
  myElement.style.opacity = progress / duration;

  if (progress < duration) {
    window.requestAnimationFrame(fadeIn);
  }
});
