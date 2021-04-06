const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

let events = [
  {
    'id': '0',
    'type': 'indoor walker',
    'distance': 100,
    'distanceType': 'Feet',
    'time': '1:30',
    'status': true
  },
  {
    'id': '1',
    'type': 'run',
    'distance': 3,
    'distanceType': 'Miles',
    'time': '1:60',
    'status': false
  },
  {
    'id': '2',
    'type': 'bike ride',
    'distance': 6,
    'distanceType': 'Miles',
    'time': '2:60',
    'status': false
  }
];


app.get('/events', (req, res) => {
  res.send(events);
});

app.post('/events', (req, res) => {
  events.push(req.body);
  res.send(req.body);
});

app.delete('/events/:id', (req, res) => {
  events = events.filter((event) => event.id !== req.params.id);
  res.send(events);
})

app.put('/events/:id', (req, res) => {
  events = events.map((event) => event.id === req.params.id ? {...event, status: !event.status} : event);
  res.send(events);
})

app.listen(port, () => console.log(`Server started on ${port}`));