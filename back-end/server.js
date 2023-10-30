require("./src/app/utils/load-env.util");
require("./src/app/utils/db-connection.utils");

const express = require("express");
const cors = require("cors");

const app = express();
const SERVER_PORT = process.env.SERVER_PORT;

const appointmentRouter = require("./src/app/routes/appointment.router");

app.use(cors());
app.use(express.json());

app.use("/api/appointments", appointmentRouter);

const server = app.listen(SERVER_PORT, () => {
  console.log(`Server started on ${server.address().port}`);
});
