require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const router = require("./routes/client");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Lawyer on call testing",
  });
});

app.use("/api/v1", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is up and listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
