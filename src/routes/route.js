
const express = require("express");
const collegecontroller = require('../controllers/collegecontroller')
const interncontroller = require('../controllers/internController');
const { adduservalidation, internvalidation } = require("../validator/uservalidation");

const router = express.Router()

router.post("colleges", adduservalidation, collegecontroller.createcollegedocument)
router.post("interns", internvalidation, interncontroller.createInterns)
router.get("collegeDetails", collegecontroller.getcollegedetail)

router.all("/*", (req, res) => { res.status(404).send({ status: false, message: "Endpoint is not correct" }) })

module.exports = router
