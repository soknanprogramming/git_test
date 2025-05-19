// app.mjs
import express from 'express';
import cors from 'cors';
import getDatabase from './database/getDatabase.mjs';
import { ObjectId } from 'mongodb';

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

app.get('/api/blogs/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await db.collection('blogs').findOne({ _id: new ObjectId(id) });
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

startServer();


