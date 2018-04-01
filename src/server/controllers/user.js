"use strict";

import { user as User } from "../models";

export const getUsers = () => {
    // throw new Error("Test errpr");
    return User.findAll({});
};
