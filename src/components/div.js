/*
Inside the MyDiv() component, declare a new variable called myDiv. Set `myDiv` equal to a JSX <div> element.

Wrap the <div></div> in parentheses, and use indentation and line breaks like in the examples. 

In between the <div></div> tags, nest an <h1></h1> containing the text Hello world.

Don't forget to wrap the jsx in parentheses.

Finally, return the myDiv variable.

*/


import React from 'react'

function MyDiv() {  
	const MyDiv = (
		<div>
			<h1>Hello world</h1>
		</div>
	)
	return <div>Hello World</div>	
}

export default MyDiv
