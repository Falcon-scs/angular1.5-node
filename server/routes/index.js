const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Server is running...');
});

router.post('/sum', (req, res) => {
  let a = req.body.a;
  let b = req.body.b;
  let sum = parseInt(a, 10) + parseInt(b, 10);
  res.status(200).json({ sum: sum });
})

module.exports = router;
