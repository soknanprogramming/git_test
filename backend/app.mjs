// app.mjs
import express from 'express';
import cors from 'cors';
import getDatabase from './database/getDatabase.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

let db = null;

async function startServer() {
    try{
        db = await getDatabase();
        console.log('Connected to database');
    }
    catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
    app.listen(PORT, () => {
        console.log(`Server run on http://localhost:${PORT}`);
    });

    
}

app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await db.collection('blogs').find().limit(10).toArray();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

startServer();


