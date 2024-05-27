import { Router } from "express";
import CreateModels from '../models/CreateModels.js';
import bcrypt from 'bcryptjs';
import connectDataBase from '../db.js';
import errorMiddleWare from '../middleWares/errorHandler.js';

const router = new Router();

router.post('/', (req, res, next) => {

    try {
        const { FullName, EmailId, Password, ConfirmPassword } = req.body;

        const { error } = CreateModels.validate(req.body);

        if (error) {
            return res.status(400).send({ error: error.details[0].message });
        }

        if (Password !== ConfirmPassword) {
            return res.status(400).send({ error: 'Passwords do not match' });
        }

        const userExists = "SELECT * FROM signup WHERE EmailId = ?;";
        const user = [EmailId];

        connectDataBase.query(userExists, user, async (err, data) => {
            if (err) {
                console.error("Database error:", err);
                return next(new Error('Internal server error'));
            }
            else if (data.length > 0) {
                return res.status(400).send({ error: 'User already exists' });
            } else {
                const hashedPassword = await bcrypt.hash(Password, 10);
                const sql = "INSERT INTO signup (FullName, EmailId, Password) VALUES (?, ?, ?);";
                const values = [FullName, EmailId, hashedPassword];
            
                connectDataBase.query(sql, values, (err) => {
                    if (err) {
                        console.error("Database error:", err);
                        return next(new Error('Internal server error'));
                    } else {
                        return res.status(200).send({ message: 'Data inserted successfully' });
                    }
                });
            }
        });
    } catch (err) {
        next(err);
    }
})

router.use(errorMiddleWare);

export default router;