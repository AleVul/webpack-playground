"use strict";

module.exports = (sequelize, DataTypes) =>
    sequelize.define("user", {
        name: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING }
    });
