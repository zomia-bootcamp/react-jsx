import React from 'react'

const friends = [
	{
		title: 'Yummmmmmm',
		src: 'https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg',
	},
	{
		title: 'Hey Guys! Wait Up!',
		src: 'https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg',
	},
	{
		title: 'Yikes',
		src: 'https://content.codecademy.com/courses/React/react_photo-alpaca.jpg',
	},
]

function RandomFriend() {
	let randomIndex ;
console.log(randomIndex)
   
	// Render the JSX
	return (
		<div>
			<h1>{friends[randomIndex].title}</h1>
			<img src={friends[randomIndex].src} alt={friends[randomIndex].title} />
			<button
				onClick={()=> randomIndex = Math.floor(Math.random() * friends.length)}>
				Random Quote
			</button>
		</div>
	)
}

export default RandomFriend
