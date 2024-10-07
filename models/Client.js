const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required field"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required field"],
  },
  email: {
    type: String,
    required: [true, "Email name is required field"],
  },
  message: {
    type: String,
    required: [true, "message is required field"],
  },
});

module.exports = mongoose.model("Client", ClientSchema);
