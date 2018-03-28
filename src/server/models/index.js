"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

const sequelize = new Sequelize("test", {
    host: "localhost",
    dialect: "sqlite",
    storage: "./db.sqlite"
});
const db = {};

fs
    .readdirSync(__dirname)
    .filter(file => file.indexOf(".js") !== 0 && file !== __filename)
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
