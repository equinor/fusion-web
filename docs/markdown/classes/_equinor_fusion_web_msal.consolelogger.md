**[Fusion Core](../README.md)**

> [Globals](../globals.md) / [@equinor/fusion-web-msal](../modules/_equinor_fusion_web_msal.md) / ConsoleLogger

# Class: ConsoleLogger

MSAL client logger for development, production should use telemetry

**`example`** 
```typescript
client.setLogger(new ConsoleLogger());
```

## Hierarchy

* Logger

  ↳ **ConsoleLogger**

## Index

### Constructors

* [constructor](_equinor_fusion_web_msal.consolelogger.md#constructor)

### Methods

* [clone](_equinor_fusion_web_msal.consolelogger.md#clone)
* [error](_equinor_fusion_web_msal.consolelogger.md#error)
* [errorPii](_equinor_fusion_web_msal.consolelogger.md#errorpii)
* [executeCallback](_equinor_fusion_web_msal.consolelogger.md#executecallback)
* [info](_equinor_fusion_web_msal.consolelogger.md#info)
* [infoPii](_equinor_fusion_web_msal.consolelogger.md#infopii)
* [isPiiLoggingEnabled](_equinor_fusion_web_msal.consolelogger.md#ispiiloggingenabled)
* [verbose](_equinor_fusion_web_msal.consolelogger.md#verbose)
* [verbosePii](_equinor_fusion_web_msal.consolelogger.md#verbosepii)
* [warning](_equinor_fusion_web_msal.consolelogger.md#warning)
* [warningPii](_equinor_fusion_web_msal.consolelogger.md#warningpii)

## Constructors

### constructor

\+ **new ConsoleLogger**(`logLevel?`: LogLevel): [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md)

*Overrides void*

*Defined in packages/msal/src/log/console.ts:16*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`logLevel?` | LogLevel | 0-1-2-3 (error-warning-info-debug) if not provided all records logged  |

**Returns:** [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md)

## Methods

### clone

▸ **clone**(`packageName`: string, `packageVersion`: string): Logger

*Inherited from [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md).[clone](_equinor_fusion_web_msal.consolelogger.md#clone)*

*Defined in node_modules/@azure/msal-common/dist/src/logger/Logger.d.ts:40*

Create new Logger with existing configurations.

#### Parameters:

Name | Type |
------ | ------ |
`packageName` | string |
`packageVersion` | string |

**Returns:** Logger

___

### error

▸ **error**(`message`: string, `correlationId?`: undefined \| string): void

*Inherited from [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md).[error](_equinor_fusion_web_msal.consolelogger.md#error)*

*Defined in node_modules/@azure/msal-common/dist/src/logger/Logger.d.ts:52*

Logs error messages.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`correlationId?` | undefined \| string |

**Returns:** void

___

### errorPii

▸ **errorPii**(`message`: string, `correlationId?`: undefined \| string): void

*Inherited from [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md).[errorPii](_equinor_fusion_web_msal.consolelogger.md#errorpii)*

*Defined in node_modules/@azure/msal-common/dist/src/logger/Logger.d.ts:56*

Logs error messages with PII.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`correlationId?` | undefined \| string |

**Returns:** void

___

### executeCallback

▸ **executeCallback**(`level`: LogLevel, `message`: string, `containsPii`: boolean): void

*Inherited from [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md).[executeCallback](_equinor_fusion_web_msal.consolelogger.md#executecallback)*

*Defined in node_modules/@azure/msal-common/dist/src/logger/Logger.d.ts:48*

Execute callback with message.

#### Parameters:

Name | Type |
------ | ------ |
`level` | LogLevel |
`message` | string |
`containsPii` | boolean |

**Returns:** void

___

### info

▸ **info**(`message`: string, `correlationId?`: undefined \| string): void

*Inherited from [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md).[info](_equinor_fusion_web_msal.consolelogger.md#info)*

*Defined in node_modules/@azure/msal-common/dist/src/logger/Logger.d.ts:68*

Logs info messages.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`correlationId?` | undefined \| string |

**Returns:** void

___

### infoPii

▸ **infoPii**(`message`: string, `correlationId?`: undefined \| string): void

*Inherited from [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md).[infoPii](_equinor_fusion_web_msal.consolelogger.md#infopii)*

*Defined in node_modules/@azure/msal-common/dist/src/logger/Logger.d.ts:72*

Logs info messages with PII.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`correlationId?` | undefined \| string |

**Returns:** void

___

### isPiiLoggingEnabled

▸ **isPiiLoggingEnabled**(): boolean

*Inherited from [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md).[isPiiLoggingEnabled](_equinor_fusion_web_msal.consolelogger.md#ispiiloggingenabled)*

*Defined in node_modules/@azure/msal-common/dist/src/logger/Logger.d.ts:84*

Returns whether PII Logging is enabled or not.

**Returns:** boolean

___

### verbose

▸ **verbose**(`message`: string, `correlationId?`: undefined \| string): void

*Inherited from [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md).[verbose](_equinor_fusion_web_msal.consolelogger.md#verbose)*

*Defined in node_modules/@azure/msal-common/dist/src/logger/Logger.d.ts:76*

Logs verbose messages.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`correlationId?` | undefined \| string |

**Returns:** void

___

### verbosePii

▸ **verbosePii**(`message`: string, `correlationId?`: undefined \| string): void

*Inherited from [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md).[verbosePii](_equinor_fusion_web_msal.consolelogger.md#verbosepii)*

*Defined in node_modules/@azure/msal-common/dist/src/logger/Logger.d.ts:80*

Logs verbose messages with PII.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`correlationId?` | undefined \| string |

**Returns:** void

___

### warning

▸ **warning**(`message`: string, `correlationId?`: undefined \| string): void

*Inherited from [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md).[warning](_equinor_fusion_web_msal.consolelogger.md#warning)*

*Defined in node_modules/@azure/msal-common/dist/src/logger/Logger.d.ts:60*

Logs warning messages.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`correlationId?` | undefined \| string |

**Returns:** void

___

### warningPii

▸ **warningPii**(`message`: string, `correlationId?`: undefined \| string): void

*Inherited from [ConsoleLogger](_equinor_fusion_web_msal.consolelogger.md).[warningPii](_equinor_fusion_web_msal.consolelogger.md#warningpii)*

*Defined in node_modules/@azure/msal-common/dist/src/logger/Logger.d.ts:64*

Logs warning messages with PII.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |
`correlationId?` | undefined \| string |

**Returns:** void
