const express = require('express');
const router = express.Router();

router.get('/initial-state', (req, res) => {
  res.json({});
});

export default router;
