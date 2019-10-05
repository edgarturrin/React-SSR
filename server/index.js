import express from "express";
import text from "./routes/text";
const api = express();

api.use("/text", text);

export default api;