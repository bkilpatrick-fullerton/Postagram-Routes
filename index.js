import express from "express";
import { mongoose } from "mongoose";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use("/user", userRoute)
app.use("/posts", postRoute)

const DBNAME = 'bktest'

const mongoConnect = async () => {
    await mongoose.connect("mongodb+srv://onaveryspecialepisode:XHhhshSETuLaFXmt@cpsc499-lads.czvu4.mongodb.net/" + DBNAME + "?retryWrites=true&w=majority&appName=CPSC499-LADS");
    console.log(`DB connected`);
}

mongoConnect();

app.listen(3000, () => console.log(`server started on port 3000`));
