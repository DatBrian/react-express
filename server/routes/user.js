import { Router } from "express";

const user = Router();

user.get("/", (req, res) => {
    res.status(201).json({ message: "Hola Brian" });
});

export default user;