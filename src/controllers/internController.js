const { find } = require("../models/College Model");
const collegeModels = require("../models/College Model");
const internModels = require("../models/Intern Model");
const validation = require("../validator/validation")


//CREATE INTERN
const createInterns = async function (req, res) {
  
  try {
    res.setHeader('Access-Control-Allow-Origin',"*")
    let { name, email, mobile, collegeId, collegeName, isDeleted, ...rest } = req.body; // Destructing Key and Values.

    if (Object.keys(rest) != 0) return res.status(400).send({ status: false, msg: "Please provide required details only" })
   
  
    let findnumber = await internModels.find({ mobile: mobile })
    let findemail = await internModels.find({ email: email })
    if (findnumber.length > 0) return res.status(400).send({ status: false, msg: "mobile no. is already exist" })
    if (findemail.length > 0) return res.status(400).send({ status: false, msg: "email id is already exist" })

    const collegeNames = await collegeModels.findOne({$or: [ { fullName: collegeName }, {name: collegeName }] })
    if (!collegeNames) return res.status(404).send({ status: false, msg: "college name is invalid" })

    collegeId = collegeNames._id
    let data = { name, email, mobile, collegeId,  isDeleted }

    const internData = await internModels.create(data);

    res.status(201).send({ status: true, message: "Registration Successfull", data: internData })
  } catch (error) {
    res.status(500).send({ status: false, message: error.message })

  }
}

module.exports.createInterns = createInterns