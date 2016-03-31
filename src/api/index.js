const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
import { createInitialState } from './utils';
/** Route for initial state of site */
router.get('/initial-state', (req, res) => {
  createInitialState().then(state => {
    res.json(state);
  }).catch(error => {
    res.send(error);
  });
});

module.exports = router;
