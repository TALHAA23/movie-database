import { ManagementClient } from "auth0";
const managment = new ManagementClient({
    domain: "dev-n1afgdpjriklak3u.us.auth0.com",
    clientId: "mUyYWMPtAU8fQMyLSTzjnHDAnGBrlOgh",
    clientSecret: "4VyJOTxtRK37uEPSdDjwW7RVqkCJACoqw9YCt4eDczkQfoXpXQHyuE3psd4eGNzg",
});
export default async function createUser({ username, email, password }) {
    console.log("creating user");
    try {
        // validator.emailValidator(email);
        // validator.passwordValidator(password);
        const user = await managment.users.create({
            connection: "Username-Password-Authentication",
            email,
            password,
            username,
        });
        return user.data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}
