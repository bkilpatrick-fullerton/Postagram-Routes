import express from "express";
import { mongoose } from "mongoose";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use("/user", userRoute);
app.use("/posts", postRoute);

const DB_NAME = 'bktest';

const mongoConnectUrl = process.env.MONGO_CONNECT_URL //Ex: mongodb+srv://<user>:<password>@cpsc499-lads.czvu4.mongodb.net/
const mongoConnectParams = process.env.MONGO_CONNECT_PARAMS //Ex: ?retryWrites=true&w=majority&appName=CPSC499-LADS
const mongoConnectStr = mongoConnectUrl + DB_NAME + mongoConnectParams;

const mongoConnect = async () => {
    await mongoose.connect(mongoConnectStr);
    console.log(`DB connected`);
}

mongoConnect();

app.listen(3000, () => console.log(`server started on port 3000`));
