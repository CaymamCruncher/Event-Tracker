function Event(props) {
  let {event, deleteEvent, completeEvent, convertDistance} = props
  return (
    <article className="event">
      <h3>{event.type}</h3>
      <dl>
        <dt>Distance Traveled:</dt>
        <dd>{event.distance} {event.distanceType}</dd>
        <dt>Time:</dt>
        <dd>{event.time} {event.timeType}</dd>
        <dt>Status:</dt>
        <dd>{event.status ? 'Finished' : 'Active'}</dd>
      </dl>
      <button onClick={() => deleteEvent(event._id)}>Delete</button>
      <button onClick={() => completeEvent(event._id, event)}>Complete</button>
      <button onClick={() => convertDistance(event.distance, event.distanceType, event._id)}>Change Distance Type</button>
    </article>
  )
}


export default Event;