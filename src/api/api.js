const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
}

const url = 'http://localhost:5000/events';

export function getEvents() {
	return (
		fetch(url, { headers })
		.then(res => res.json())
		.catch(err => console.warn(err))
	)
}

export function addServerEvent(event) {
	return (
		fetch(url, { method: 'POST', body: JSON.stringify(event), headers })
		.then(res => res.json())
		.catch(err => console.warn(err))
	)
}

export function deleteServerEvent(id) {
	return (
		fetch(`${url}/${id}`, { method: 'DELETE', headers })
		.then(res => res.json())
		.catch(err => console.warn(err))
	)
}

export function completeServerEvent(id) {
	return (
		fetch(`${url}/${id}`, { method: 'PUT', headers })
		.then(res => res.json())
		.catch(err => console.warn(err))
	)
}
