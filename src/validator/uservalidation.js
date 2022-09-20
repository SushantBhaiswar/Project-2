const { internvalidation } = require('./validation1');
const user = require('./validation1')
// const joi = require('joi')
// const validator = require('express-joi-validation')
module.exports = {
    adduservalidation: (req, res, next) => {
        const { value, error } = user.collegevalidation.validate(req.body);
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else next()
    },
    internvalidation: (req, res, next) => {
        const { value, error } = user.internvalidation.validate(req.body);
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else next()
    }

}