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

We can try it together in the [Friend.js](./src/components/Friend.js) file.

```jsx
import React from 'react';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys! Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

function RandomFriend() {
  // Generate a random index to select a friend
  const randomIndex = Math.floor(Math.random() * friends.length);
  
  // Get the randomly selected friend
  const randomFriend = friends[randomIndex];
  
  // Render the JSX
  return (
    <div>
      <h1>{randomFriend.title}</h1>
      <img src={randomFriend.src} alt={randomFriend.title} />
    </div>
  );
}

export default RandomFriend;
```

In this example:

1. We import React to use JSX syntax and define the `friends` array containing objects with `title` and `src` properties representing friends and their corresponding image URLs.
2. We create a functional component called `RandomFriend`.
3. Inside the `RandomFriend` component, we generate a random index using `Math.random()` and `Math.floor()` functions. This index will be used to select a random friend from the `friends` array.
4. We retrieve the randomly selected friend from the `friends` array using the random index.
5. We render JSX within the return statement, displaying the title of the random friend as a heading (`<h1>`) and the corresponding image using the `src` and `alt` attributes.
6. Finally, we export the `RandomFriend` component as the default export, allowing it to be imported and used in other files.

When you use the `RandomFriend` component in your application, it will render a random friend each time it is rendered or re-rendered.

### Exercises

Refactor the code in `MyQuote.js` to have similar functionality as the `Friend.js` component. Create an array called `quotes` with objects containing `title` and `src` properties. Inside the `MyQuote` functional component, generate a random index using `Math.random()` and `Math.floor()`, and retrieve a random quote from the `quotes` array. Render a heading element displaying the quote's `title` property and an image element using the `src` property. Save the changes, import `MyQuote` in `App.js`, and render the `MyQuote` component. When running the React development server, `MyQuote` will randomly render a quote from the array each time it is rendered or re-rendered.


## Use a Conditional in a Function Component


To use a conditional statement inside a function component, you can follow this approach:

It's important to note that the `if` statement is located inside the function component, but before the `return` statement.

This is how it might look:

```jsx
function TodaysPlan() {
  const weather = 'sunny';

  if (weather === 'sunny') {
    return <p>Today's plan: Go to the beach!</p>;
  } else {
    return <p>Today's plan: Stay at home and code.</p>;
  }
}
```

In the above example, we have a variable `weather` with the value `'sunny'`. The conditional statement checks if the weather is sunny, and if it is, it returns the JSX element `<p>Today's plan: Go to the beach!</p>`. Otherwise, if the weather is not sunny, it returns the JSX element `<p>Today's plan: Stay at home and code.</p>`.

Remember to place the conditional statement before the `return` statement within the function component.


### Group Activity

Refactor the `Quote.js` component to include a condition in the rendering logic. Choose a condition based on your desired requirement, such as displaying an additional element only if a certain prop value is true. Inside the component's JSX structure, add an `if` statement or a conditional (ternary) operator to check the condition. Provide the JSX content to render when the condition is met, and optionally, an alternative content if the condition is not met. Save the changes, run the development server, and observe how the component's rendering adapts based on the condition you added. This task allows you to practice incorporating conditional rendering into your React components.


## Event Listener and Handlers in a Component

You can include event handlers in your function components to run specific code in response to interactions with the user interface, such as clicking.

Let's take a look at an example:

```jsx
function MyComponent() {
  function handleHover() {
    alert('Stop it. Stop hovering.');
  }
  return <div onHover={handleHover}></div>;
}
```

In the above example, we have an event handler called `handleHover()`. It is defined inside the function component and, by convention, starts with the word "handle" followed by the type of event it is handling.

The logic for what should happen when the `<div>` is hovered over is contained within the `handleHover()` function. The function is then passed as a prop to the `<div>` element using the `onHover` attribute.

Event handler functions are defined within the function component and are usually triggered by specific events.

One thing to watch out for is that when passing the event handler function, such as `handleHover`, as a prop, we don't include parentheses after the function name. For example:

```jsx
return <div onHover={handleHover}></div>;
```

This is because passing it as `handleHover` indicates that it should be called only when the event occurs. If we were to pass it as `handleHover()`, it would immediately trigger the function instead of waiting for the event, so be cautious!

### Group Activity

Instructions:

1. Open the `Quote.js` file in your code editor.
2. Locate the JSX structure inside the `return` statement.
3. Add a button element (`<button>`) at the desired location within the JSX structure. This button will serve as the "Random Quote" button.
4. Assign an `onClick` event handler to the button element, using the provided code snippet: `onClick={handleRandomQuote}`.
5. Define the `handleRandomQuote` function within the `Quote` component. This function will be responsible for selecting a random quote from the `quotes` array and updating the displayed quote.
6. Inside the `handleRandomQuote` function, use the provided code snippet to generate a random index and store it in a variable: `const randomIndex = Math.floor(Math.random() * quotes.length);`.
7. Retrieve the randomly selected quote from the `quotes` array using the random index: `const randomQuote = quotes[randomIndex];`.
8. Modify the JSX structure inside the `return` statement to display the selected quote by replacing the existing quote content with `randomQuote.title` and `randomQuote.src` in the appropriate places.
9. Save the changes to `Quote.js`.
10. Test the functionality by clicking the "Random Quote" button. You should see a random quote being displayed each time the button is clicked.

Expected Result:
After completing the steps, you should have a working "Random Quote" button in the `Quote` component. Clicking the button will select a random quote from the `quotes` array and display it on the page. Each click should result in a different quote being shown.

Remember to consult the React documentation or other learning resources for guidance and assistance while completing this task. Happy coding!



