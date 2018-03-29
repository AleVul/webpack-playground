"use strict";

import path from "path";
import express from "express";
import { getUsers } from "../controllers/user";

const router = express.Router();

router.get("/", (req, res, next) =>
    getUsers()
        .then(users => res.sendFile(path.join(__dirname, "views", "index.html")))
        .catch(next)
);

module.exports = router;
