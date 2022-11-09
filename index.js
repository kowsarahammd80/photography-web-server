const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require('jsonwebtoken');
require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

 


 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SECRET_USER}@cluster0.df9nipl.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  
  try{

    

  }
  finally{

  }

}



app.get('/', (req, res) => {
  res.send('Photography server is running')
})

app.listen(port, () => {
   console.log(`Photography server on ${port}`)
})