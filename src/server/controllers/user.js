"use strict";

const models = require("../models");
const User = models.user;
const _publics = {};

_publics.getUsers = User.findAll({});

module.exports = _publics;
