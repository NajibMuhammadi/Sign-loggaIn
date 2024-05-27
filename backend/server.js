import express from 'express';
import cors from 'cors';
import connectDataBase from './db.js';
import CreateRouter from './routers/CreateRouter.js';
import LoginRouter from './routers/LoginRouter.js';

const app = express();
const PORT = process.env.PORT || 8083;

app.use(cors());
app.use(express.json());
app.use('/create', CreateRouter);
app.use('/signin', LoginRouter);

connectDataBase.connect(err => {
    if (err) {
        console.error("Database error:", err);
    }
    else {
        app.listen(PORT, () => {
            console.log(`Server running on port http://localhost:${PORT}`);
        });
    }
});