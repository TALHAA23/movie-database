import { GetUsers200ResponseOneOfInnerCreatedAt } from "auth0";

import User from "../../model/collections/User";

interface Creds {
  email: string;
  user_id: string;
  username: string;
  created_at: GetUsers200ResponseOneOfInnerCreatedAt;
}

export default async function addUserToDb({
  email,
  user_id,
  username,
  created_at,
}: Creds) {
  const user = new User({
    _id: user_id,
    userInfo: { email, username, created_at },
  });
  try {
    const newUser = await user.save();
    return { _id: newUser.id, ...newUser.userInfo };
  } catch (err) {
    throw err;
  }
}
