var express = require('express');
var router = express.Router();
import { createInitialState } from './utils';

router.get('/initial-state', function(req, res) {
  console.log('in initialState')
  createInitialState().then(state => {
    res.json(state)
  }).catch(err => {
    res.send(error)
  })
})

module.exports = router;
