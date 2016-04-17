const express = require('express');
const router = express.Router(); // eslint-disable-line
import { loadData } from './github';

router.get('/initial-state', (req, res) => {
  loadData().then(state => res.json(state));
});

export default router;
