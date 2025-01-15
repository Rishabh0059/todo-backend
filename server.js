const express =require("express");
const mongoose=require("mongoose");
const cors=require('cors')
const routes=require('./routes/TodoRoute')

require('dotenv').config();

const app=express();
const PORT=process.env.port || 5000

app.use(express.json())
app.use(cors({ origin: 'https://rishabh0059.github.io' }))

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log('Connected successfully'))
.catch((err)=>console.log(err))

app.use(routes);

app.listen(PORT,()=>{
  console.log(`app is listening on : ${PORT}`);
})