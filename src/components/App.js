import '../styles/css/main.css';
import React, { useState } from 'react';
import ListEvents from './ListEvents';
import AddEvent from './AddEvent';

function App() {
	const [events, changeEvents] = useState([
		{
			'id': 0,
			'type': 'indoor walker',
			'distance': 100,
			'distanceType': 'Feet',
			'time': '1:30',
			'status': true
		},
		{
			'id': 1,
			'type': 'run',
			'distance': 3,
			'distanceType': 'Miles',
			'time': '1:60',
			'status': false
		},
		{
			'id': 2,
			'type': 'bike ride',
			'distance': 6,
			'distanceType': 'Miles',
			'time': '2:60',
			'status': false
		}
	]);
	const [shownEvents, changeShownEvents] = useState('all');
	const [showAddEvent, changeShowAddEvent] = useState(false);

	function deleteEvent(id) {
		changeEvents(events.filter((event) => event.id !== id));
	}

	function addEvent(event) {
		changeEvents([...events, event]);
	}

	function completeEvent(id) {
		changeEvents(events.map((event) => event.id === id ? {...event, status: !event.status} : event));
	}

	function convertDistance(distance, distanceType, id) {
		switch(distanceType) {
			case 'Miles': 
				changeEvents(events.map((event) => event.id === id ? {...event, distance: Math.round((distance * 1.60934) * 100)/100, distanceType: 'Kilometers'} : event));
				break;
			case 'Kilometers':
				changeEvents(events.map((event) => event.id === id ? {...event, distance: Math.round((distance * 3281) * 100)/100, distanceType: 'Feet'} : event));
				break;
			default:
				changeEvents(events.map((event) => event.id === id ? {...event, distance: Math.round((distance/5280) * 100)/100, distanceType: 'Miles'} : event));
				break;
		}
	}

  return (
    <>
			<header>
				<div className="container no-margin">
					<h1>Event Tracker</h1>
					<nav>
						<button onClick={() => changeShownEvents('all')}>All</button>
						<button onClick={() => changeShownEvents('complete')}>Complete</button>
						<button onClick={() => changeShownEvents('incomplete')}>Incomplete</button>
						<button onClick={() => changeShowAddEvent(!showAddEvent)}>Add Event</button>
					</nav>
				</div>
			</header>
			<main>
				{showAddEvent && (
					<article className="container">
						<AddEvent addEvent={addEvent}/>
					</article>
				)}
				<article className="container">
					<h2>Showing {shownEvents} Events</h2>
					<ListEvents events={events} shownEvents={shownEvents} deleteEvent={deleteEvent} completeEvent={completeEvent} convertDistance={convertDistance}/>
				</article>
			</main>
			<footer>
				<div className="container">
					<small>&copy;2021 Hayden Tofts</small>
				</div>
			</footer>
    </>
  );
}

export default App;
