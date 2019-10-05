import express from "express";
import App from "../components/app";
import React from "react";
import { renderToString } from "react-dom/server";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send(renderToString(<App />));
});

export default router;
