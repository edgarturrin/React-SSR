import express from "express";
import compression from "compression";
import api from "./api";
import server from "./server";

const app = express();

app.use(compression());
app.use(express.static("public"));

app.use('/', api);
app.use('/api', server);


const port = process.env.PORT || 8080;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});
