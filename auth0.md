auth0 have so many lib below in config for auth0 (general purpose) lib.

1. AuthenticationClient is use to login, token, refresh etc of a client.
2. ManagementClient is use to create (signup) a user have lots of purpose like creating action and more.

3. Token: Most imp use to auth a user to get access to protected routes
4. Proctected rotues: route can be procted by adding JWT verfication on it.

JWT verfication require a token, token is valid if it have
clinet id, secret, audience(importanly), domain
also JWT verifaction take them all to verfiy a user to grant them access
