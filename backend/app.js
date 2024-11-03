const express = require('express')
const cors = require('cors')

const adminRoutes = require('./routes/adminRoutes');
const hodRoutes=require('./routes/hodRouter')

const dotenv=require('dotenv')
dotenv.config()

const connectTodB= require('./config/hodDatabase')
connectTodB();

const app = express()
const port = 3000


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/admin', adminRoutes);
app.use('/doctor', hodRoutes);



app.listen(port, () => {
  console.log(`OPD backend running on port ${port}`)
})
