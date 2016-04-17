const express = require('express');
const router = express.Router(); // eslint-disable-line

router.get('/initial-state', (req, res) => {
  res.json({});
});

export default router;
