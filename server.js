const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectID } = require('mongodb');
const port = process.env.PORT || 5000;
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// let events = [
//   {
//     'id': '0',
//     'type': 'indoor walker',
//     'distance': 100,
//     'distanceType': 'Feet',
//     'time': '1:30',
//     'status': true
//   },
//   {
//     'id': '1',
//     'type': 'run',
//     'distance': 3,
//     'distanceType': 'Miles',
//     'time': '1:60',
//     'status': false
//   },
//   {
//     'id': '2',
//     'type': 'bike ride',
//     'distance': 6,
//     'distanceType': 'Miles',
//     'time': '2:60',
//     'status': false
//   }
// ];

client.connect().then(() => {
  const col = client.db('EventDatabase').collection('Events');


  app.get('/events', (req, res) => {
    col.find({}).toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  app.post('/events', (req, res) => {
    console.log(req.body);
    col.insertOne(req.body).then(() => {
      res.send(req.body);
    }).catch(error => console.error('There was an error ', error));
  });

  app.delete('/events/:id', (req, res) => {
    const _id = new ObjectID(req.params.id);
    col.deleteOne({_id}).then(() => {
      console.log('Succesfully deleted ', _id);
      res.send(_id);
    }).catch(error => console.error('Deletion failed ', error));
  });

  app.put('/events/:id', (req, res) => {
    const _id = new ObjectID(req.params.id);
    const values = {$set: {status: !req.body.status}};
    col.updateOne({_id}, values).then(() => {
      console.log('Completed Event ', _id);
      res.send(_id);
    })
  });
}).catch((e) => console.error(e));


app.listen(port, () => console.log(`Server started on ${port}`));