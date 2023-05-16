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

Go to [`MyQuote.js`](./src/components/MyQuote.js), and follow the instructions given under the title: "Components Attributes" .

























In React, component variable attributes are properties or variables that you can define within a component to store and manipulate data. These attributes are specific to the component and can be used to control its behavior, appearance, and functionality.

Here are a few key points about component variable attributes:

1. **Data Storage**: Component variable attributes allow you to store and manage data within a component. You can define variables or properties inside a component to hold values, such as strings, numbers, arrays, objects, or even functions.

2. **State Management**: In React, state is a special type of component variable attribute that represents the mutable data within a component. By using state, you can make your component dynamic and responsive to user interactions or data changes. State is typically defined using the `useState` hook.

3. **Props**: Props (short for properties) are component variable attributes that allow you to pass data from a parent component to a child component. Props enable you to configure and customize child components based on the values provided by the parent component. Props are immutable, meaning they cannot be changed within the child component.

4. **Dynamic Rendering**: Component variable attributes can control the rendering logic of a component. By modifying the values of these attributes, you can conditionally render different content, apply styles, or trigger specific behavior within your component.

5. **Event Handling**: Component variable attributes are often used to define event handlers. You can assign functions to attributes like `onClick`, `onSubmit`, or `onChange` to handle user interactions or form submissions. These functions can access and modify other component variables or trigger other actions based on the event.

Component variable attributes provide a flexible way to store, manipulate, and pass data within React components. They enable components to have their own internal state, respond to changes, and interact with other components in the application.
