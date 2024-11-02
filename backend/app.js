const express = require('express')
const cors = require('cors')

const adminRoutes = require('./routes/adminRoutes');

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`OPD backend running on port ${port}`)
})
