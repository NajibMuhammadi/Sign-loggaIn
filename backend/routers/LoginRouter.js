import { Router } from 'express';
import bcrypt from 'bcryptjs';
import connectDataBase from '../db.js';

const router = Router();

router.post('/', (req, res) => {
    const { EmailId, Password } = req.body;

    const userExistsQuery = "SELECT * FROM signup WHERE EmailId = ?;";
    const user = [EmailId];

    connectDataBase.query(userExistsQuery, user, async (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send({ error: 'Internal server error' });
        }

        if (data.length === 0) {
            console.log('User not found with email:', EmailId);
            return res.status(400).send({ error: 'User not found' });
        }

        const hashedPassword = data[0].Password;
        try {
            const match = await bcrypt.compare(Password, hashedPassword);
            console.log('Password comparison result:', match);
            if (match) {
                return res.status(200).send({ message: 'User logged in successfully' });
            } else {
                console.log('Incorrect password for email:', EmailId);
                return res.status(400).send({ error: 'Password!' });
            }
        } catch (error) {
            console.error("Password comparison error:", error);
            return res.status(500).send({ error: 'Internal server error' });
        }
    });
});

export default router;
