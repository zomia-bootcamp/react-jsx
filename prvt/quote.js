import React from 'react'

const Quote = () => {
	const quotes = [
		{ title: 'Quote 1', src: 'Author 1' },
		{ title: 'Quote 2', src: 'Author 2' },
		{ title: 'Quote 3', src: 'Author 3' },
		// Add more quotes as needed
	]

	const randomIndex = Math.floor(Math.random() * quotes.length)

	// Get the randomly selected friend
	const randomQuote = quotes[randomIndex]
	const handleRefresh = () => {
		window.location.reload()
	}

	return (
		<div>
			<h2>{randomQuote.title}</h2>
			<p>- {randomQuote.src}</p>
			<button onClick={handleRefresh}>Random Quote</button>
		</div>
	)
}

export default Quote
