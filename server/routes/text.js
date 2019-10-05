import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

const router = express.Router();

router.get("/uno", async (req, res) => {
  res.send({text:"uno"});
});

router.get("/dos", async (req, res) => {
    res.send({text:"dos"});
});
export default router;
