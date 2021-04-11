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
  --data 'email=apiato%40mail.com1&password=password&name=John%20Doe'
```

**Registration response:**

```json
{
  "data": {
    "object": "User",
    "id": "XbPW7awNkzl83LD6",
    "name": "John Doe",
    "email": "apiato@mail.com",
    "confirmed": null,
    "nickname": "Mega",
    "gender": "male",
    "birth": null,
    "social_auth_provider": null,
    "social_id": null,
    "social_avatar": {
      "avatar": null,
      "original": null
    },
    "created_at": "2021-03-24T15:02:56.000000Z",
    "updated_at": "2021-03-24T15:02:56.000000Z",
    "readable_created_at": "19 seconds ago",
    "readable_updated_at": "19 seconds ago"
    "roles": {
      "data": []
    }
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

For Third-Party Clients you must have client ID and secret first. You can generate them by creating new client in your app using Laravel Passport.

For First-Party Clients you can use a proxy to add those fields on requests coming from your trusted client. For an example on how to do it look at `ProxyLoginForAdminWebClientAction` Action in Authentication Container.

### Register users by Social Account {#register-users-by-social-account}

> (Facebook, Twitter, Google..)

Checkout the [Social Authentication](.././features/social-authentication) Page for how to Sign up with Social Account.
