import { Collection, Db, MongoClient } from 'mongodb';

let client: MongoClient;
/**
 * Connects to a MongoClient based on `process.env.MONGODB_URL`.
 */
export async function connectMongoClient(): Promise<void> {
  const { MONGODB_URL } = process.env;

  if (!MONGODB_URL) {
    throw new Error('process.env.MONGODB_URL is missing');
  }

  client = new MongoClient(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
}

export function disconectMongoClient(): void {
  client.close();
}

export function getCollection<T>(collectionName: string): Collection<T> {
  return client.db().collection<T>(collectionName);
}

export function getDB(): Db {
  return client.db();
}
