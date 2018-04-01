import {sequelize} from "./models";
import express from "express";
import router from "./routes";

const app = express();
app.use(express.static("./views"));
app.use(router);
app.use((err, req, res, next) => {
    if (err) {
        console.error(err);
        next(err);
    }
    res.end();
});

sequelize.sync().then(() =>
    app.listen(8080, err => {
        if (err) console.error(err);
        console.log("Server launched");
    })
);
