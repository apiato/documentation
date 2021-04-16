---
title: User Registration
---

- [Register users by credentials (email and passwords)](#register-users-by-credentials-email-and-passwords)
- [Register users by Social Account](#register-users-by-social-account)

### Register users by credentials (email and passwords) {#register-users-by-credentials-email-and-passwords}

Call the `http://api.apiato.test/v1/register` endpoint (you can find its documentation after generating the API Docs.

Check out the `registerUser` endpoint in the API Routes files.

This will register a new User and respond with user object.

**Registration request:**

```http
curl --request POST \
  --url http://api.apiato.test/v1/register \
  --header 'accept: application/json' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data 'email=john%40doe.com&password=password&name=John%20Doe'
```

**Registration response:**

```json
{
  "data": {
    "object": "User",
    "id": "XbPW7awNkzl83LD6",
    "name": "John Doe",
    "email": "john@doe.com",
    "email_verified_at": null,
    "gender": null,
    "birth": null,
    "created_at": "2021-04-15T14:17:24.000000Z",
    "updated_at": "2021-04-15T14:17:24.000000Z",
    "readable_created_at": "1 second ago",
    "readable_updated_at": "1 second ago"
  },
  "meta": {
    "include": [
      "roles"
    ],
    "custom": []
  }
}
```
  
Note: After registration in order to get the user access token you will have to send another call to `http://api.example.com/v1/oauth/token` with following fields and values
```
username => your_username e.g. admin@admin.com
password => your_password
grant_type => password
client_id => your_client_id
client_secret => your_client_secret
```

For third-party clients you must have client ID and secret first. You can generate them by creating new client in your app using Laravel Passport.

For first-party clients you can use a proxy to add those fields on requests coming from your trusted client. For an example on how to do it look at `ProxyLoginForWebClientAction` Action in Authentication Container.

### Register users by Social Account {#register-users-by-social-account}

> (Facebook, Twitter, Google..)

Checkout the [Social Authentication](../core-features/social-authentication) Page for how to Sign up with Social Account.
