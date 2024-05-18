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
    const sql = "INSERT INTO signup (FullName, EmailId, Password) VALUES (?, ?, ?);";
    const { FullName, EmailId, Password, } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10);
    const hashedEmail = await bcrypt.hash(EmailId, 10);
    const values = [
        FullName,
        hashedEmail,
        hashedPassword
    ];
    

    connectDataBase.query(sql, values, (err, data) => {
        if(err) {
            console.error("Database error:", err);
            res.status(500).send({ error: 'Internal server error' });
        } else {
            res.status(200).send({ message: 'Data inserted successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
