exports.userFormValidator = (req, res, next) => {
	req.check('name', "Name is required").notEmpty();
	req.check('number', "Phone no. is required.").notEmpty();
	req.check('email', "Email is required.")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must be in correct format");
    req.check('location', "Location is required.").notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
}