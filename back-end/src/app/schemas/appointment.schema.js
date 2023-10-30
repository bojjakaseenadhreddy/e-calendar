const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  title: String,
  description: String,
});

module.exports = Appointment = mongoose.model("Appointment", appointmentSchema);
