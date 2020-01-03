# App Env
> Buttercup application environment configuration manager

[![Build Status](https://travis-ci.org/buttercup/app-env.svg?branch=master)](https://travis-ci.org/buttercup/app-env)

## About

Buttercup is a cross-platform password manager, and in being so requires vastly different configurations for each platform it runs on. Take for instance Buttercup for Desktop and the browser extension - one is Node (native) and the other is web-based. This project provides a method to set environment-specific tools and methods (for crypto, for instance). It also provides some presets for native and web.

### React Native

There is no preset configuration in this library for React Native (Buttercup for Mobile), as this environment is extremely complex and highly-reliant on React-Native internals.

## Usage

**Step 1:** Install `@buttercup/app-env` as a dependency:

```shell
npm install @buttercup/app-env --save
```

**Step 2:** Load a preset environment:

```javascript
// For node:
require("@buttercup/app-env/native");
```

```javascript
// For web:
import "@buttercup/app-env/web";
```

_Or execute a custom environment configuration (see later section)._

**Step 3:** Load Buttercup and other dependencies

Buttercup should always be **loaded after the app-env**:

```javascript
const { ArchiveManager } = require("buttercup");

// ...
```

### Custom environment configuration

You can easily specify your own configuration by specifying methods for each required property, for example:

```javascript
const { getSharedAppEnv } = require("@buttercup/app-env");

function decryptText(/* ... */) {
    /* ... */
}

function encryptText(/* ... */) {
    /* ... */
}

getSharedAppEnv().setProperties({
    "crypto/v1/decryptText": decryptText,
    "crypto/v1/encryptText": encryptText
});
```

The following properties should be specified:

| Property                      | Description                               |
|-------------------------------|-------------------------------------------|
| `compression/v1/compressText` | Method for compressing text -> text.      |
| `compression/v1/decompressText` | Method for decompressing text -> text.  |
| `crypto/v1/decryptText`       | Decryption method for decrypting text.    |
| `crypto/v1/encryptText`       | Encryption method for encrypting text.    |
| `crypto/v1/setDerivationRounds` | Set the number of derivation rounds to use for key derivation. |
