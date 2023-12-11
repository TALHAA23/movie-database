import { ManagementClient } from "auth0";
const managment = new ManagementClient({
  domain: "dev-n1afgdpjriklak3u.us.auth0.com",
  clientId: "mUyYWMPtAU8fQMyLSTzjnHDAnGBrlOgh",
  clientSecret:
    "4VyJOTxtRK37uEPSdDjwW7RVqkCJACoqw9YCt4eDczkQfoXpXQHyuE3psd4eGNzg",
});

export default async function createUser() {
  try {
    console.log("Creating uesr!");
    const user = await managment.users.create({
      connection: "Username-Password-Authentication",
      email: "mynewemail@moviedb.com",
      password: "Mypassword123:",
    });

    return user.data;
  } catch (err) {
    console.log(err);
  }
}
