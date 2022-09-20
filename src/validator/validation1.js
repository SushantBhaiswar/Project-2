const joi = require('joi')
// const { default: mongoose } = require('mongoose')
// const objectid = mongoose.Types.Objectid
module.exports = {
    collegevalidation: joi.object({
        name: joi.string().required().trim(),
        fullname: joi.string().required().trim(),
        logolink: joi.string().required()
    }),
        internvalidation : joi.object ({
            name: joi.string().required().trim(),
            email: joi.string().required().email(),
            mobile : joi.number().required().min(1000000000).message("Mobile is not valid").max(9999999999).message("Mobile is not valid"),
            // collegeId : joi.objectid()
    })
    
}