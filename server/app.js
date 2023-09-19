import  express  from "express";
import user from "./routes/user.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use("/user", user);

const config = {
    port: 5091,
    host: 'localhost'
};

app.listen(config.port, () => {
    console.log(`Server listening on http://${config.host}:${config.port}`);
});