// q6c2NxAIFFAUz0Yv
import { config } from "dotenv";
config();
import { Request, Response, NextFunction } from "express";
import { MongoClient, Collection, Db } from "mongodb";
import mongoose from "mongoose";

const uri =
  "mongodb+srv://moviedb:q6c2NxAIFFAUz0Yv@atlascluster.wbs3s6w.mongodb.net/?retryWrites=true&w=majority";

interface Database {
  isConnected: 0 | 1;
  client: Db | null;
}
const DATABASE_NAME = "moviedb";
const db: Database = {
  client: null,
  isConnected: 0,
};

const client = new MongoClient(uri);

export const connectDatabase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!db.isConnected) {
    console.log("trying", "+++++++++++++++");
    try {
      // await client.connect().then((res) => {
      //   db.client = res.db();
      //   db.isConnected = true;
      // });
      await mongoose
        .connect(uri, {
          dbName: "moviedb",
        })
        .then((res) => {
          db.isConnected = res.ConnectionStates.connected;
        });
    } catch (err) {
      next(err);
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
  if (db.isConnected) client.close();
}
