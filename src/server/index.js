import path from "path";
import express from "express";
import router from "./routes";

const app = express();
app.use(express.static(path.join(__dirname, "publics")));
app.use(router);
app.use((err, req, res, next) => {
    if (err) console.error(err);
    res.end();
});

app.listen(8080, err => {
    if (err) console.error(err);
    console.log("Server launched");
});
