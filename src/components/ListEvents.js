import Event from './Event';

function ListEvents(props) {
  const {events, shownEvents, deleteEvent, completeEvent, convertDistance} = props;
  function filterEvents() {
    switch(shownEvents) {
      case 'complete': 
        return events.filter((event) => event.status);
      case 'incomplete':
        return events.filter((event) => !event.status)
      default: 
        return events;
    }
  }
  let filteredEvents = filterEvents();

  return (
    <ul>
      {filteredEvents.map((event) => (
        <li key={event.id}>
          <Event event={event} deleteEvent={deleteEvent} completeEvent={completeEvent} convertDistance={convertDistance}/>
        </li>
      ))}
    </ul>
  )
}

export default ListEvents;