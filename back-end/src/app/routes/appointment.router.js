const express = require("express");
const Appointment = require("../schemas/appointment.schema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const results = await Appointment.find();
    return res.send(results).status(200);
  } catch (error) {
    return res.status(500);
  }
});

module.exports = router;
