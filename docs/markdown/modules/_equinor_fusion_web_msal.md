**[Fusion Core](../README.md)**

> [Globals](../globals.md) / @equinor/fusion-web-msal

# Module: @equinor/fusion-web-msal

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

## Index

### References

* [AuthClient](_equinor_fusion_web_msal.md#authclient)
* [ConsoleLogger](_equinor_fusion_web_msal.md#consolelogger)

### Classes

* [AuthClient](../classes/_equinor_fusion_web_msal.authclient.md)
* [ConsoleLogger](../classes/_equinor_fusion_web_msal.consolelogger.md)

### Type aliases

* [AuthBehavior](_equinor_fusion_web_msal.md#authbehavior)
* [AuthClientConfig](_equinor_fusion_web_msal.md#authclientconfig)
* [AuthRequest](_equinor_fusion_web_msal.md#authrequest)

### Variables

* [defaultBehavior](_equinor_fusion_web_msal.md#defaultbehavior)

### Functions

* [compareOrigin](_equinor_fusion_web_msal.md#compareorigin)
* [createAuthClient](_equinor_fusion_web_msal.md#createauthclient)
* [normalizeUri](_equinor_fusion_web_msal.md#normalizeuri)
* [redirect](_equinor_fusion_web_msal.md#redirect)

## References

### AuthClient

Re-exports: [AuthClient](../classes/_equinor_fusion_web_msal.authclient.md)

___

### ConsoleLogger

Re-exports: [ConsoleLogger](../classes/_equinor_fusion_web_msal.consolelogger.md)

## Type aliases

### AuthBehavior

Ƭ  **AuthBehavior**: \"popup\" \| \"redirect\"

*Defined in packages/msal/src/behavior.ts:9*

- **Popup:**
  Use when initiating the process via opening a popup window in the user's browser

- **Redirect:**
  Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
  This function redirects the page, so any code that follows this function will not execute.

___

### AuthClientConfig

Ƭ  **AuthClientConfig**: Configuration & { auth: Partial\<Configuration[\"auth\"]>  }

*Defined in packages/msal/src/index.ts:5*

___

### AuthRequest

Ƭ  **AuthRequest**: PopupRequest \| RedirectRequest

*Defined in packages/msal/src/request.ts:66*

Request object passed by user to retrieve a Code from the
server (first leg of authorization code grant flow).

**scopes**\
Array of scopes the application is requesting access to.

**authority**\
Url of the authority which the application acquires tokens from.

**correlationId**\
Unique GUID set per request to trace a request end-to-end for telemetry purposes.

**redirectUri**\
The redirect URI where authentication responses can be received by your application. It must exactly match one of the redirect URIs registered in the Azure portal.

**extraScopesToConsent**\
Scopes for a different resource when the user needs consent upfront.

**responseMode**\
Specifies the method that should be used to send the authentication result to your app. Fragment is the only valid option for msal-browser.

**codeChallenge**\
Used to secure authorization code grant via Proof of Key for Code Exchange (PKCE). For more information, see the PKCE RCF:https://tools.ietf.org/html/rfc7636

**codeChallengeMethod**\
The method used to encode the code verifier for the code challenge parameter. Can be "plain" or "S256". If excluded, code challenge is assumed to be plaintext. For more information, see the PKCE RCF: https://tools.ietf.org/html/rfc7636

**state**\
A value included in the request that is also returned in the token response. A randomly generated unique value is typically used for preventing cross site request forgery attacks. The state is also used to encode information about the user's state in the app before the authentication request occurred.

**prompt**\
Indicates the type of user interaction that is required.
- login: will force the user to enter their credentials on that request, negating single-sign on
- none:  will ensure that the user isn't presented with any interactive prompt. if request can't be completed via single-sign on, the endpoint will return an interaction_required error
- consent: will the trigger the OAuth consent dialog after the user signs in, asking the user to grant permissions to the app
- select_account: will interrupt single sign-=on providing account selection experience listing all the accounts in session or any remembered accounts or an option to choose to use a different account

**loginHint**\
Can be used to pre-fill the username/email address field of the sign-in page for the user, if you know the username/email address ahead of time. Often apps use this parameter during re-authentication, having already extracted the username from a previous sign-in using the preferred_username claim.

**sid**\
Session ID, unique identifier for the session. Available as an optional claim on ID tokens.

**domainHint**\
Provides a hint about the tenant or domain that the user should use to sign in. The value of the domain hint is a registered domain for the tenant.

**extraQueryParameters**\
String to string map of custom query parameters.

**claims**\
In cases where Azure AD tenant admin has enabled conditional access policies, and the policy has not been met, exceptions will contain claims that need to be consented to.

**nonce**\
A value included in the request that is returned in the id token. A randomly generated unique value is typically used to mitigate replay attacks.

**redirectStartPage**\
The page that should be returned to after loginRedirect or acquireTokenRedirect.
This should only be used if this is different from the redirectUri and will default to the page that initiates the request.
When the navigateToLoginRequestUrl config option is set to false this parameter will be ignored.

**`see`** [microsoft-authentication-library-for-js](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-browser/src/request)

## Variables

### defaultBehavior

• `Const` **defaultBehavior**: [AuthBehavior](_equinor_fusion_web_msal.md#authbehavior) = "popup"

*Defined in packages/msal/src/behavior.ts:14*

Default behavior for login and acquisition of token

## Functions

### compareOrigin

▸ `Const`**compareOrigin**(`a`: string, `b`: string): boolean

*Defined in packages/msal/src/util/url.ts:21*

Compares normalized version of urls

**`internal`** 

#### Parameters:

Name | Type |
------ | ------ |
`a` | string |
`b` | string |

**Returns:** boolean

___

### createAuthClient

▸ `Const`**createAuthClient**\<T>(`tenantId`: string, `clientId`: string, `redirectUri?`: undefined \| string, `config?`: [AuthClientConfig](_equinor_fusion_web_msal.md#authclientconfig), `ctor?`: undefined \| {}): T

*Defined in packages/msal/src/index.ts:27*

Creates an authentication client with basic config.

**`example`** 
```typescript
const myClient = createClient(
 '224123a0d-7990-4ba1-aff3-1dss9569af32',
 '6dab35d4-59ff-4dcc-3356-24479e6fc888',
 '/my-app/auth'
);
```

#### Type parameters:

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`T` | IPublicClientApplication | AuthClient | client type, default to [AuthClient](_equinor_fusion_web_msal.md#authclient)  |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tenantId` | string | tenant to for authentication |
`clientId` | string | client id for authentication |
`redirectUri?` | undefined \| string | callback url for authentication (must match exact configured url in app) |
`config?` | [AuthClientConfig](_equinor_fusion_web_msal.md#authclientconfig) | optional [Configuration](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/src/config/Configuration.ts) |
`ctor?` | undefined \| {} | optional client class  |

**Returns:** T

___

### normalizeUri

▸ `Const`**normalizeUri**(`uri`: string, `home?`: string): string

*Defined in packages/msal/src/util/url.ts:10*

Creates and normalizes redirect uri.
Strips double and trailing slashes

**`internal`** 

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`uri` | string | - | relative path or full url |
`home` | string | window.location.origin | base url for relative urls  |

**Returns:** string

___

### redirect

▸ `Const`**redirect**(`url`: string, `timeout?`: number, `history?`: undefined \| false \| true): Promise\<void>

*Defined in packages/msal/src/util/browser.ts:11*

Redirects browser to provided location
If not redirected by provided timeout, promise is rejected

**`internal`** 

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`url` | string | - | endpoint to navigate to |
`timeout` | number | 3000 | max wait before redirect |
`history?` | undefined \| false \| true | - | append navigation to history  |

**Returns:** Promise\<void>
