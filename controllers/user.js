const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const User = require('../models/user');
const { errorHandler } = require('../helpers/errorHandler');

exports.formSubmit = (req, res) => {
    const user = new User(req.body);
    user.save((error, data) => {
        if (error) {
            console.log('Unable to submit the form.', error)
            return res.status(400).json({
                error: 'Unable to submit the form.'
            });
        }
        res.json({ data });
    });
}