const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;


app.get('/events', (req, res) => {
  const events = [
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
	];
  res.send(events);
})

app.listen(port, () => console.log(`Server started on ${port}`));