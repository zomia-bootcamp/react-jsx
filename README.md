# JSX in a Component


In this lesson, you'll learn how JSX and React components can work together, and you'll become more comfortable with both concepts while learning some new tricks.

Let's consider this block of HTML code:

```jsx
<blockquote>
  <p>
    It always seems impossible until it's done.
  </p>
  <cite>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Nelson_Mandela">
     Nelson Mandela
    </a>
  </cite>
</blockquote>
```

Now, how can we make a React component that returns this HTML structure?

You can check out the [`QuoteMaker.js`](./src/components/QuoteMaker.js) file to see one way of achieving it.

One important thing to notice in `QuoteMaker` is the use of parentheses `()` in the return statement on lines 4 and 16. Up until now, your function components' return statements might have looked like this, without any parentheses:

```jsx
return <h1>Hello world</h1>;
```

However, when you have a multi-line JSX expression, it should always be wrapped in parentheses! That's why the return statement in `QuoteMaker` has parentheses around it.

### Exercises

In [`MyQuote.js`](./src/components/MyQuote.js), write a React component that returns a quote that inspires you.

Use QuoteMaker.js as a guide! Remember to import React at the top of the file, and remember to export your component at the bottom of the file.

## Variable Attributes in a Component

Component variable attributes are like containers inside a component that can hold different types of information. Imagine a box with different labels on it, where you can store and retrieve things.

In React, these attributes allow you to store and manage data within a component. For example, you can have a variable inside a component to hold a number, a piece of text, or even a list of items.

Attributes can also control how a component looks and behaves. You can have an attribute that determines the color of a button or the size of a text box.

Another important use of attributes is passing data between components. You can pass information from a parent component to a child component using attributes called "props." This allows you to customize and configure the child component based on the values provided by the parent.

Think of component variable attributes as the knobs and switches that let you control the behavior, appearance, and functionality of your React components. They are like little containers that hold important information and allow components to interact with each other in a flexible way.

Take a look at this JavaScript object named redPanda:

```js
const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width: '200px
};
```
How could you render a React component with an image of `redPanda` and its properties?

Select [`RedPanda.js`](./src/components/RedPanda.js) to see one way to do this.


### Exercises

Go to [`MyQuote.js`](./src/components/MyQuote.js), and follow the instructions given under Part 2 .


## Putting Logic in a Function Component

A function component is required to have a return statement, but it can also contain other things, like simple calculations that need to be performed before returning the JSX element.

Here's an example of performing calculations inside a function component:

```jsx
function RandomNumber() {
  // First, some logic that needs to happen before returning
  const n = Math.floor(Math.random() * 10 + 1);
  // Next, a return statement that uses the calculated logic
  return <h1>{n}</h1>;
}
```

Be careful to avoid a common mistake like this:

```jsx
function RandomNumber() {
  return (
    const n = Math.floor(Math.random() * 10 + 1);
    <h1>{n}</h1>
  )
}
```
What is wrong with the code above?

In the above example, the line with the `const n` declaration is incorrect because it should come before the `return` statement. Placing it inside the return block will cause a syntax error.

### Exercises

Let's add some logic to our components in [`MyQuote.js`](./src/components/MyQuote.js).
Follow the instructions given under Part 3.












