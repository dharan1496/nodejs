const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbconnection");


connectDB();
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`));

// app.get("/api/contacts", (req, res) => {
//   //   res.send("Get all contacts");
//   res.status(200).json({ message: "Get all contacts" });
// });
