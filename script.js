const express = require('express');
const cors = require('cors')

const PORT = process.env.PORT || 2999;

const app = express();

app.use(cors());

app.use(express.json());

app.get('/get', (req, res) => {
  const date = new Date();
  res.status(200).json({
    date: date.getMinutes()
  })
})

app.listen(PORT, () => {
  console.log('server start, port '+ PORT)
})

