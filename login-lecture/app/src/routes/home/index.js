const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.views.home);
router.get('/register', ctrl.views.register);
router.get('/login', ctrl.views.login);

router.post('/register', ctrl.process.register);
router.post('/login', ctrl.process.login);


module.exports = router;