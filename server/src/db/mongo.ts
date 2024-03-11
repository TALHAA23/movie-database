import { Request, Response, NextFunction } from "express";
import { MongoClient, Collection } from "mongodb";
import mongoose from "mongoose";

const uri =
  "mongodb+srv://moviedb:q6c2NxAIFFAUz0Yv@atlascluster.wbs3s6w.mongodb.net/?retryWrites=true&w=majority";

const DATABASE_NAME = "moviedb";
const client = new MongoClient(uri);
export const connectDatabase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (mongoose.connection.readyState == 0) {
    //if disconnected
    console.log("trying", "+++++++++++++++");
    try {
      await mongoose.connect(uri, {
        dbName: "moviedb",
      });
    } catch (err) {
      console.log(err);
    }
  }

  next();
};

export function getCollection(collectionName: string): Collection {
  const currentdb = client.db(DATABASE_NAME);
  const currentCollection = currentdb.collection(collectionName);
  if (!currentCollection) throw new Error("Faild to get " + collectionName);
  return currentCollection;
}

export function closeDatabase() {
  if (mongoose.ConnectionStates.connected) client.close();
}
