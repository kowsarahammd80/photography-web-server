const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

 


 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SECRET_USER}@cluster0.df9nipl.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  
  try{

    const serviceCollection = client.db('photography').collection('services');

     app.get('/services', async (req, res) => {
         
      const query = {}
      const curser = serviceCollection.find(query);
      const services = await curser.toArray();
      res.send(services)

     })

     app.get('/services/:id', async(req, res) => {
       
      const id = req.params.id;
      const query = {_id: ObjectId(id)};
      const service = await serviceCollection.findOne(query);
      res.send(service)
     })

  }
  finally{

  }

}
run().catch(err => console.error(err))



app.get('/', (req, res) => {
  res.send('Photography server is running')
})

app.listen(port, () => {
   console.log(`Photography server on ${port}`)
})