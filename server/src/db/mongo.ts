// q6c2NxAIFFAUz0Yv
import { Request, Response, NextFunction } from "express";
import { MongoClient, Collection, Db } from "mongodb";
const uri =
  "mongodb+srv://moviedb:q6c2NxAIFFAUz0Yv@atlascluster.wbs3s6w.mongodb.net/?retryWrites=true&w=majority";
interface Database {
  isConnected: boolean;
  client: Db | null;
}
const DATABASE_NAME = "moviedb";
const db: Database = { client: null, isConnected: false };

const client = new MongoClient(uri);

export const connectDatabase = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!db.isConnected) {
    try {
      await client.connect().then((res) => {
        db.client = res.db();
        db.isConnected = true;
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
