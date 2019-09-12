var express = require('express');
var router = express.Router();
const db = require('../db');

router.post('/setup', async (req, res)=>{
  const { name, budget } = req.body;
  const insertQuery = `
  INSERT INTO dudes (name, budget)
  VALUES
  ($1, $2)
  `
  const inserted = await db.query(insertQuery, [name, budget]);

  res.json(req.body)
})

module.exports = router;
