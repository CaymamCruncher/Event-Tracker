import {useState} from 'react';
function AddEvent(props) {
  const {addEvent} = props;
  const [type, changeType] = useState('');
  const [distance, changeDistance] = useState('');
  const [distanceType, changeDistanceType] = useState('Miles');
  const [hours, changeHours] = useState('');
  const [minutes, changeMinutes] = useState('');
  const [status, changeStatus] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    let time = `${hours} Hours and ${minutes} Minutes`;
    let event = {
      type,
      distance,
      distanceType,
      time,
      status
    };
    changeType('');
    changeDistance('');
    changeHours('');
    changeMinutes('');
    changeStatus(false);
    addEvent(event);
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="type">Type of workout</label>
        <input required id="type" name="type" type="text" value={type} onChange={(e) => changeType(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="distance">Distance Traveled</label>
        <input required id="distance" name="distance" type="number" value={distance} onChange={(e) => changeDistance(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input required id="hours" name="hours" type="number" value={hours} onChange={(e) => changeHours(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input required id="minutes" name="minutes" type="number" min="0" max="59" value={minutes} onChange={(e) => changeMinutes(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="distance-type">Distance Type</label>
        <select id="distance-type" name="distance-type" value={distanceType} onChange={(e) => changeDistanceType(e.target.value)}>
          <option default value="Miles">Miles</option>
          <option value="Kilometers">Kilometers</option>
          <option value="Feet">Feet</option>
        </select>
      </div>
      <div>
        <label htmlFor="complete">Completed</label>
        <input id="complete" name="complete" type="checkbox" value={status} onChange={(e) => changeStatus(e.target.value)}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddEvent;