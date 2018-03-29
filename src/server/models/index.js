"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

const sequelize = new Sequelize({
    database: "test",
    host: "127.0.0.1",
    dialect: "sqlite"
});
const db = {};
console.log("This is current dirname");
console.log(__dirname);
fs
    .readdirSync(__dirname)
    .filter(file => file.indexOf(".js") !== 0 && file !== "index.js")
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
