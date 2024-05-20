import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import connectDataBase from './db.js';

const app = express();
const PORT = process.env.PORT || 8083;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    const sql = "SELECT * FROM signup;";

    connectDataBase.query(sql, (err, data) => {
        if (err) {
            console.error("Database error:", err);
            res.status(500).send({ error: 'Internal server error' });
        } else {
            res.status(200).send(data);
        }
    });
});

app.post('/create', async (req, res) => {
    const { FullName, EmailId, Password, ConfirmPassword } = req.body;
    if (Password !== ConfirmPassword) {
        return res.status(400).send({ error: 'Passwords do not match' });
    }

    const userExists = "SELECT * FROM signup WHERE EmailId = ?;";
    const user = [EmailId];
    connectDataBase.query(userExists, user, async (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send({ error: 'Internal server error' });
        } else if (data.length > 0) {
            return res.status(400).send({ error: 'User already exists' });
        } else {
            const hashedPassword = await bcrypt.hash(Password, 10);
            const sql = "INSERT INTO signup (FullName, EmailId, Password) VALUES (?, ?, ?);";
            const values = [FullName, EmailId, hashedPassword];
            
            connectDataBase.query(sql, values, (err, data) => {
                if(err) {
                    console.error("Database error:", err);
                    return res.status(500).send({ error: 'Internal server error' });
                } else {
                    return res.status(200).send({ message: 'Data inserted successfully' });
                }
            });
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
