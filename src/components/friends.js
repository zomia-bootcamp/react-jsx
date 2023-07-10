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
	// Generate a random index to select a friend
	const randomIndex = Math.floor(Math.random() * friends.length)

	// Get the randomly selected friend
	const randomFriend = friends[randomIndex]

	// Render the JSX
	return (
		<div>
			<h1>{randomFriend.title}</h1>
			<img src={randomFriend.src} alt={randomFriend.title} />
		</div>
	)
}

export default RandomFriend
