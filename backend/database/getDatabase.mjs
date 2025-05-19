// ./database/getDatabase.mjs
import mongodb from 'mongodb';


const uri = 'mongodb://localhost:27017';
const client = new mongodb.MongoClient(uri)
const dbName = 'test'; 

async function getDatabase() {
    try {
        await client.connect();
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error('Error getting database:', error);
        throw error;
    }
}

export default getDatabase;