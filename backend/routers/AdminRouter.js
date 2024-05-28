import { Router } from "express";
import connectDataBase from "../db.js";

const router = new Router();

router.get("/", (req, res) => {
    const sql = "SELECT * FROM signup";
    connectDataBase.query(sql, (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send({ error: "Internal server error" });
        }

        return res.status(200).send(result);
    });
});

export default router;