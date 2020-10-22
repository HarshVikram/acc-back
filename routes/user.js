const express = require('express');
const router = express.Router();

const { formSubmit } = require('../controllers/user.js');
const { userFormValidator } = require("../validator");

router.post('/form', formSubmit);

module.exports = router;