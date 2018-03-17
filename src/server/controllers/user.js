"use strict";

import { user as User } from "../models";

export const getUsers = () => User.findAll({});
