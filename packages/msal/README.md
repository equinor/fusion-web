# `@equinor/fusion-web-msal`

> Light wrapper of Microsoft official [msal library](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-browser)

## Behavior

By default the client will try to uses a hidden iframe to fetch an authorization code from the eSTS.

There are cases where this may not work:

- Any browser using a form of Intelligent Tracking Prevention
- If there is not an established session with the service
- For the cases where interaction is required, you cannot send a request with `prompt=none`

**Popup**

Use when initiating the login process via opening a popup window in the user's browser

**Redirect**

This function redirects the page, so any code that follows this function will not execute.

_IMPORTANT:_ It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.

## Usage

### Basic

```typescript
import { createAuthClient } from '@equinor/fusion-web-msal';

const main = async () => {
  const authPath = '/my-app/auth';
  const client = createAuthClient(
    'azure-tennant-id',
    'azure-client-id'
    authPath
  });

  if(window.location.path === authPath) {
    await client.handleRedirectPromise();
  }

  if(!client.account){
    await auth.login();
  }

  const token = await client.acquireToken({
    scopes: ['email'],
  });

  if (!token) throw Error('failed to fetch token');

  fetch('https://my-server.not/api/bogus', {
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  });
};

main();
```

### Popup

```typescript
auth.login('popup');
auth.acquireToken('popup');
```

### Redirect

```typescript
auth.login('redirect');
auth.acquireToken('redirect');
```
