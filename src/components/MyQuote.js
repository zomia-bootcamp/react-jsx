// 1. Define a component to render your quote






























/*
--- Part 2: Components Attributes ---

Start the development server to see the rendered UI in your browser. That way you can see your progress being rendered in the browser window as you work.

- Define an object, above the component, called `quote` with two properties: title and src.

- Assign a string to the title property, something like "My Chosen Quote".

- Assign a valid image URL to the src property, representing an image related to the quote.

- Save the changes to MyQuote.js.

- In the MyQuote component, Wrap the content of your reaturn statment with a <div></div> to insure one outmost elemnt.

- Nest an <h1> element inside of your <div> element.

- Use the value of quote.title as the content of the <h1> element.

- Still inside of the <div></div> tags, make a new line after the <h1></h1> tags.

- On your new line, add an <img /> element.

Your <img /> should have two attributes:

  1. an `src` of quote.src
  2. an `alt` of quote.title

Save the changes to MyQuote.js.

*/

/* 
---Part 3: Event Handlers ---

3. Add a button element (`<button>`) at the desired location within the JSX structure. This button will be used to trigger the selection of a random quote.
4. Assign an `onClick` event handler to the button element, specifying a function that will be called when the button is clicked. For example, you can name the function `handleRandomQuote`.
5. Define the `handleRandomQuote` function within the `Quote` component. Inside the function, generate a random index using `Math.random()` and `Math.floor()` to select a random quote from the `quotes` array.
6. Store the randomly selected quote in a variable, such as `randomQuote`.
7. Update the state of the component to reflect the selected quote using React's `useState` hook or any other preferred state management solution.
8. Modify the JSX structure inside the `return` statement to display the selected quote, accessing the necessary properties from the `randomQuote` object.
9. Save the changes to `Quote.js`.
10. Open the file where you are using the `Quote` component.
11. If necessary, update the import statement to reflect the correct file path.
12. Start the development server to see the rendered UI in your browser.
13. Test the functionality by clicking the button. You should see a random quote being displayed each time the button is clicked.

Expected Result:
When you run the React development server and click the button added to the `Quote` component, a random quote from the `quotes` array should be selected and displayed on the page. Each click should result in a different quote being shown.

Task Extension:
Once you've completed the task, you can further enhance the UI by adding styling to the button or displaying additional information related to the selected quote. You can also consider adding functionality to prevent the same quote from being selected consecutively or adding a reset button to start the random selection process again.

Remember to consult the official React documentation or other learning resources for guidance and assistance while completing this task. Good luck!



