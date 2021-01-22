**[Fusion Core](../README.md)**

> [Globals](../globals.md) / [@equinor/fusion-web-msal](../modules/_equinor_fusion_web_msal.md) / AuthClient

# Class: AuthClient

### Simple extension of Microsoft`s authentication client.

When using this client tenant is **required** since common login is deprecated after all.
By providing tenant the user account can simple be extracted from current session *if any*.

**`example`** 
```typescript
const tenantId = '224123a0d-7990-4ba1-aff3-1dss9569af32';
const authPath = '/my-app/auth';
const client = new AuthClient(tenantId, {
   auth: {
       clientId: '6dab35d4-59ff-4dcc-3356-24479e6fc888',
       authority: `https://login.microsoftonline.com/${tenantId}`,
       redirectUri:  window.location.origin + '/my-app/auth'
   }
});
document.getElementById('login-btn').addEventListener('click', () =>
   client.login({ scopes: ['data.read'] })
     .then(console.log)
     .catch(console.error)
);
(async() => {
   if(window.location.path === authPath) {
       await client.handleRedirectPromise()
   }
)();
```

**`see`** [Microsoft Authentication Library](https://github.com/AzureAD/microsoft-authentication-library-for-js)

**`see`** [Microsoft identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)

## Hierarchy

* PublicClientApplication

  ↳ **AuthClient**

## Implements

* IPublicClientApplication

## Index

### Constructors

* [constructor](_equinor_fusion_web_msal.authclient.md#constructor)

### Properties

* [tenantId](_equinor_fusion_web_msal.authclient.md#tenantid)

### Accessors

* [account](_equinor_fusion_web_msal.authclient.md#account)
* [clientId](_equinor_fusion_web_msal.authclient.md#clientid)

### Methods

* [acquireToken](_equinor_fusion_web_msal.authclient.md#acquiretoken)
* [acquireTokenPopup](_equinor_fusion_web_msal.authclient.md#acquiretokenpopup)
* [acquireTokenRedirect](_equinor_fusion_web_msal.authclient.md#acquiretokenredirect)
* [acquireTokenSilent](_equinor_fusion_web_msal.authclient.md#acquiretokensilent)
* [addEventCallback](_equinor_fusion_web_msal.authclient.md#addeventcallback)
* [getAccountByHomeId](_equinor_fusion_web_msal.authclient.md#getaccountbyhomeid)
* [getAccountByLocalId](_equinor_fusion_web_msal.authclient.md#getaccountbylocalid)
* [getAccountByUsername](_equinor_fusion_web_msal.authclient.md#getaccountbyusername)
* [getActiveAccount](_equinor_fusion_web_msal.authclient.md#getactiveaccount)
* [getAllAccounts](_equinor_fusion_web_msal.authclient.md#getallaccounts)
* [getDiscoveredAuthority](_equinor_fusion_web_msal.authclient.md#getdiscoveredauthority)
* [getLogger](_equinor_fusion_web_msal.authclient.md#getlogger)
* [handleRedirectPromise](_equinor_fusion_web_msal.authclient.md#handleredirectpromise)
* [login](_equinor_fusion_web_msal.authclient.md#login)
* [loginPopup](_equinor_fusion_web_msal.authclient.md#loginpopup)
* [loginRedirect](_equinor_fusion_web_msal.authclient.md#loginredirect)
* [logout](_equinor_fusion_web_msal.authclient.md#logout)
* [removeEventCallback](_equinor_fusion_web_msal.authclient.md#removeeventcallback)
* [setActiveAccount](_equinor_fusion_web_msal.authclient.md#setactiveaccount)
* [setLogger](_equinor_fusion_web_msal.authclient.md#setlogger)
* [ssoSilent](_equinor_fusion_web_msal.authclient.md#ssosilent)

## Constructors

### constructor

\+ **new AuthClient**(`tenantId`: string, `config`: Configuration): [AuthClient](_equinor_fusion_web_msal.authclient.md)

*Overrides void*

*Defined in packages/msal/src/client.ts:64*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tenantId` | string | tenant id for client domain |
`config` | Configuration | required [Configuration](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/src/config/Configuration.ts)  |

**Returns:** [AuthClient](_equinor_fusion_web_msal.authclient.md)

## Properties

### tenantId

• `Readonly` **tenantId**: string

*Defined in packages/msal/src/client.ts:70*

tenant id for client domain

## Accessors

### account

• get **account**(): AccountInfo \| undefined

*Defined in packages/msal/src/client.ts:54*

**Returns:** AccountInfo \| undefined

Returns account for client tenant that MSAL currently has data for.
(the account object is created at the time of successful login)

___

### clientId

• get **clientId**(): string \| undefined

*Defined in packages/msal/src/client.ts:62*

**Returns:** string \| undefined

- Configured client id

## Methods

### acquireToken

▸ **acquireToken**(`options?`: [AuthRequest](../modules/_equinor_fusion_web_msal.md#authrequest), `behavior?`: [AuthBehavior](../modules/_equinor_fusion_web_msal.md#authbehavior), `silent?`: boolean): Promise\<AuthenticationResult \| void>

*Defined in packages/msal/src/client.ts:128*

Will try to silently acquire an access token for a given set of scopes.
Will use cached token if available, otherwise will attempt to acquire a new token from the network via refresh token.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`options` | [AuthRequest](../modules/_equinor_fusion_web_msal.md#authrequest) | { scopes: [] } | - |
`behavior` | [AuthBehavior](../modules/_equinor_fusion_web_msal.md#authbehavior) | defaultBehavior | - |
`silent` | boolean | true |  Attempt to use a hidden iframe to fetch an authorization code from the eSTS if [AuthClient.account](_equinor_fusion_web_msal.authclient.md#account) or login hint. Provided [AuthBehavior](../modules/_equinor_fusion_web_msal.md#authbehavior) is used as fallback. There are cases where this may not work: - Any browser using a form of Intelligent Tracking Prevention - If there is not an established session with the service  |

**Returns:** Promise\<AuthenticationResult \| void>

Promise that is fulfilled when this function has completed, or rejected if an error was raised.

___

### acquireTokenPopup

▸ **acquireTokenPopup**(`request`: PopupRequest): Promise\<AuthenticationResult>

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[acquireTokenPopup](_equinor_fusion_web_msal.authclient.md#acquiretokenpopup)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:91*

Use when you want to obtain an access_token for your API via opening a popup window in the user's browser

#### Parameters:

Name | Type |
------ | ------ |
`request` | PopupRequest |

**Returns:** Promise\<AuthenticationResult>

- a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object

___

### acquireTokenRedirect

▸ **acquireTokenRedirect**(`request`: RedirectRequest): Promise\<void>

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[acquireTokenRedirect](_equinor_fusion_web_msal.authclient.md#acquiretokenredirect)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:84*

Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
the page, so any code that follows this function will not execute.

IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.

#### Parameters:

Name | Type |
------ | ------ |
`request` | RedirectRequest |

**Returns:** Promise\<void>

___

### acquireTokenSilent

▸ **acquireTokenSilent**(`request`: SilentRequest): Promise\<AuthenticationResult>

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[acquireTokenSilent](_equinor_fusion_web_msal.authclient.md#acquiretokensilent)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/PublicClientApplication.d.ts:59*

Silently acquire an access token for a given set of scopes. Will use cached token if available, otherwise will attempt to acquire a new token from the network via refresh token.

#### Parameters:

Name | Type |
------ | ------ |
`request` | SilentRequest |

**Returns:** Promise\<AuthenticationResult>

- a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object

___

### addEventCallback

▸ **addEventCallback**(`callback`: EventCallbackFunction): string \| null

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[addEventCallback](_equinor_fusion_web_msal.authclient.md#addeventcallback)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:273*

Adds event callbacks to array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | EventCallbackFunction |   |

**Returns:** string \| null

___

### getAccountByHomeId

▸ **getAccountByHomeId**(`homeAccountId`: string): AccountInfo \| null

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[getAccountByHomeId](_equinor_fusion_web_msal.authclient.md#getaccountbyhomeid)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:168*

Returns the signed in account matching homeAccountId.
(the account object is created at the time of successful login)
or null when no matching account is found

#### Parameters:

Name | Type |
------ | ------ |
`homeAccountId` | string |

**Returns:** AccountInfo \| null

{@link AccountInfo} - the account object stored in MSAL

___

### getAccountByLocalId

▸ **getAccountByLocalId**(`localAccountId`: string): AccountInfo \| null

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[getAccountByLocalId](_equinor_fusion_web_msal.authclient.md#getaccountbylocalid)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:175*

Returns the signed in account matching localAccountId.
(the account object is created at the time of successful login)
or null when no matching account is found

#### Parameters:

Name | Type |
------ | ------ |
`localAccountId` | string |

**Returns:** AccountInfo \| null

{@link AccountInfo} - the account object stored in MSAL

___

### getAccountByUsername

▸ **getAccountByUsername**(`userName`: string): AccountInfo \| null

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[getAccountByUsername](_equinor_fusion_web_msal.authclient.md#getaccountbyusername)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:161*

Returns the signed in account matching username.
(the account object is created at the time of successful login)
or null when no matching account is found.
This API is provided for convenience but getAccountById should be used for best reliability

#### Parameters:

Name | Type |
------ | ------ |
`userName` | string |

**Returns:** AccountInfo \| null

{@link AccountInfo} - the account object stored in MSAL

___

### getActiveAccount

▸ **getActiveAccount**(): AccountInfo \| null

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[getActiveAccount](_equinor_fusion_web_msal.authclient.md#getactiveaccount)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:184*

Gets the currently active account

**Returns:** AccountInfo \| null

___

### getAllAccounts

▸ **getAllAccounts**(): AccountInfo[]

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[getAllAccounts](_equinor_fusion_web_msal.authclient.md#getallaccounts)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:153*

Returns all accounts that MSAL currently has data for.
(the account object is created at the time of successful login)
or empty array when no accounts are found

**Returns:** AccountInfo[]

{@link AccountInfo[]} - Array of account objects in cache

___

### getDiscoveredAuthority

▸ **getDiscoveredAuthority**(`requestAuthority?`: undefined \| string): Promise\<Authority>

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[getDiscoveredAuthority](_equinor_fusion_web_msal.authclient.md#getdiscoveredauthority)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:206*

Used to get a discovered version of the default authority.

#### Parameters:

Name | Type |
------ | ------ |
`requestAuthority?` | undefined \| string |

**Returns:** Promise\<Authority>

___

### getLogger

▸ **getLogger**(): Logger

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[getLogger](_equinor_fusion_web_msal.authclient.md#getlogger)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:278*

Returns the logger instance

**Returns:** Logger

___

### handleRedirectPromise

▸ **handleRedirectPromise**(): Promise\<AuthenticationResult \| null>

*Overrides void*

*Defined in packages/msal/src/client.ts:162*

By default the parent client will redirect authentication to url that triggered authentication.

When the `navigateToLoginRequestUrl` is set to false, token is handled at the provided `redirectUri`
and redirect after token is handled by client.

**`inheritdoc`** 

**Returns:** Promise\<AuthenticationResult \| null>

___

### login

▸ **login**(`options?`: [AuthRequest](../modules/_equinor_fusion_web_msal.md#authrequest), `behavior?`: [AuthBehavior](../modules/_equinor_fusion_web_msal.md#authbehavior), `silent?`: boolean): Promise\<AuthenticationResult \| void>

*Defined in packages/msal/src/client.ts:85*

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`options?` | [AuthRequest](../modules/_equinor_fusion_web_msal.md#authrequest) | - | - |
`behavior` | [AuthBehavior](../modules/_equinor_fusion_web_msal.md#authbehavior) | defaultBehavior | - |
`silent` | boolean | true |  Attempt to use a hidden iframe to fetch an authorization code from the eSTS if [AuthClient.account](_equinor_fusion_web_msal.authclient.md#account) or login hint. Provided [AuthBehavior](../modules/_equinor_fusion_web_msal.md#authbehavior) is used as fallback. There are cases where this may not work: - Any browser using a form of Intelligent Tracking Prevention - If there is not an established session with the service  |

**Returns:** Promise\<AuthenticationResult \| void>

Promise that is fulfilled when this function has completed, or rejected if an error was raised.

___

### loginPopup

▸ **loginPopup**(`request?`: PopupRequest): Promise\<AuthenticationResult>

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[loginPopup](_equinor_fusion_web_msal.authclient.md#loginpopup)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/PublicClientApplication.d.ts:52*

Use when initiating the login process via opening a popup window in the user's browser

#### Parameters:

Name | Type |
------ | ------ |
`request?` | PopupRequest |

**Returns:** Promise\<AuthenticationResult>

- a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object

___

### loginRedirect

▸ **loginRedirect**(`request?`: RedirectRequest): Promise\<void>

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[loginRedirect](_equinor_fusion_web_msal.authclient.md#loginredirect)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/PublicClientApplication.d.ts:44*

Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
any code that follows this function will not execute.

IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.

#### Parameters:

Name | Type |
------ | ------ |
`request?` | RedirectRequest |

**Returns:** Promise\<void>

___

### logout

▸ **logout**(`logoutRequest?`: EndSessionRequest): Promise\<void>

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[logout](_equinor_fusion_web_msal.authclient.md#logout)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:146*

Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
Default behaviour is to redirect the user to `window.location.href`.

#### Parameters:

Name | Type |
------ | ------ |
`logoutRequest?` | EndSessionRequest |

**Returns:** Promise\<void>

___

### removeEventCallback

▸ **removeEventCallback**(`callbackId`: string): void

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[removeEventCallback](_equinor_fusion_web_msal.authclient.md#removeeventcallback)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:274*

#### Parameters:

Name | Type |
------ | ------ |
`callbackId` | string |

**Returns:** void

___

### setActiveAccount

▸ **setActiveAccount**(`account`: AccountInfo \| null): void

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[setActiveAccount](_equinor_fusion_web_msal.authclient.md#setactiveaccount)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:180*

Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`account` | AccountInfo \| null |   |

**Returns:** void

___

### setLogger

▸ **setLogger**(`logger`: Logger): void

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[setLogger](_equinor_fusion_web_msal.authclient.md#setlogger)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:283*

Replaces the default logger set in configurations with new Logger with new configurations

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`logger` | Logger | Logger instance  |

**Returns:** void

___

### ssoSilent

▸ **ssoSilent**(`request`: SsoSilentRequest): Promise\<AuthenticationResult>

*Inherited from [AuthClient](_equinor_fusion_web_msal.authclient.md).[ssoSilent](_equinor_fusion_web_msal.authclient.md#ssosilent)*

*Defined in node_modules/@azure/msal-browser/dist/src/app/ClientApplication.d.ts:114*

This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
- Any browser using a form of Intelligent Tracking Prevention
- If there is not an established session with the service

In these cases, the request must be done inside a popup or full frame redirect.

For the cases where interaction is required, you cannot send a request with prompt=none.

If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
you session on the server still exists.

#### Parameters:

Name | Type |
------ | ------ |
`request` | SsoSilentRequest |

**Returns:** Promise\<AuthenticationResult>

- a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
