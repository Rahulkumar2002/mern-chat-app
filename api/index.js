const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const messageRoutes = require("./routes/messages");
const conversationRoutes = require("./routes/conversations");
const app = express();
const port = process.env.PORT || 8080;

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Mongo database is connected ");
    }).catch(err => console.log(err));

//Middle ware 
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/conversations", conversationRoutes);

app.listen(port, () => {
    console.log(`Your app is listing at localhost:${port}`);
})