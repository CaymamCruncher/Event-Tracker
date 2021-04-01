const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
}

export function getEvents() {
	return (
		fetch('http://localhost:5000/events', { headers })
		.then((res) => res.json())
		.catch(err => console.warn(err))
	)
}
