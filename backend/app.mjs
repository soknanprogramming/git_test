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

app.delete('/api/blogs/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.collection('blogs').deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/blogs', async (req, res) => {
    const { title, context } = req.body;
    try {
        if (!title || !context) {
            return res.status(400).json({ error: 'Title and content are required' });
        }
        const result = await db.collection('blogs').insertOne({ title, context });
        res.status(201).json(result);
    }
    catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

startServer();


