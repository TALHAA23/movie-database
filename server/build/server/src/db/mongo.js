// q6c2NxAIFFAUz0Yv
import { config } from "dotenv";
config();
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
const uri = "mongodb+srv://moviedb:q6c2NxAIFFAUz0Yv@atlascluster.wbs3s6w.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "moviedb";
const db = {
    client: null,
    isConnected: 0,
};
const client = new MongoClient(uri);
export const connectDatabase = async (req, res, next) => {
    if (mongoose.connection.readyState == 0) {
        //if disconnected
        console.log("trying", "+++++++++++++++");
        try {
            await mongoose.connect(uri, {
                dbName: "moviedb",
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    next();
};
export function getCollection(collectionName) {
    const currentdb = client.db(DATABASE_NAME);
    const currentCollection = currentdb.collection(collectionName);
    if (!currentCollection)
        throw new Error("Faild to get " + collectionName);
    return currentCollection;
}
export function closeDatabase() {
    if (db.isConnected)
        client.close();
}
