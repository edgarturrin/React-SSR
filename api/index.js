import express from "express";
import compression from "compression";
import home from "./routes/home";
const app = express();

app.use(compression());
app.use(express.static("public"));

app.use("/", home);


export default app;