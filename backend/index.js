const express = require("express");
const cors = require("cors");
const axios = require('axios')

require("dotenv").config();

const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
