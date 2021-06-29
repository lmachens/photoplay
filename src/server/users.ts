import { Collection, ObjectId } from 'mongodb';
import { User } from '../types';
import { getCollection, getDB } from './db';

function getUsersCollection(): Collection<User> {
  return getCollection<User>('users');
}

/**
 * Creates users collection with validator and indexes.
 */
export async function createUsersCollection(): Promise<void> {
  const collections = await getDB().listCollections().toArray();
  if (collections.some((collection) => collection.name === 'users')) {
    // Users collection already exsists
    return;
  }

  // https://docs.mongodb.com/realm/mongodb/document-schemas/
  await getDB().createCollection('users', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'users',
        additionalProperties: false,
        properties: {
          _id: {
            bsonType: 'objectId',
          },
          email: {
            bsonType: 'string',
          },
          firstName: {
            bsonType: 'string',
          },
          lastName: {
            bsonType: 'string',
          },
          password: {
            bsonType: 'string',
          },
          imgSrc: {
            bsonType: 'string',
          },
        },
        required: ['email', 'firstName', 'lastName', 'password'],
      },
    },
  });

  // https://docs.mongodb.com/manual/reference/method/db.collection.createIndexes/
  await getUsersCollection().createIndexes([
    { key: { email: 1 }, unique: true },
  ]);

  console.log('Created users collection');
}

export async function insertUser(user: User): Promise<User> {
  const result = await getUsersCollection().insertOne(user, {});
  const insertedUser = result.ops[0];
  delete insertedUser.password;
  return insertedUser;
}

export async function deleteUser(user: Partial<User>): Promise<boolean> {
  const result = await getUsersCollection().deleteOne(user);
  return typeof result.deletedCount === 'undefined' || result.deletedCount > 0;
}

export async function findUser(user: Partial<User>): Promise<User | null> {
  return await getUsersCollection().findOne(user, {
    projection: { password: 0 },
  });
}

export async function updateUser(
  userId: string,
  fieldsToUpdate: Partial<User>
): Promise<boolean> {
  const result = await getUsersCollection().updateOne(
    {
      _id: new ObjectId(userId),
    },
    {
      $set: fieldsToUpdate,
    }
  );
  return result.modifiedCount > 0;
}
