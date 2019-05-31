
# React Native AEP Campaign Standard Extension

[![npm version](https://badge.fury.io/js/%40adobe%2Freact-native-acpcampaign.svg)](https://badge.fury.io/js/%40adobe%2Freact-native-acpcampaign) [![CircleCI](https://img.shields.io/circleci/project/github/adobe/react-native-acpcampaign/master.svg?logo=circleci)](https://circleci.com/gh/adobe/workflows/react-native-acpcampaign) ![NPM](https://img.shields.io/npm/l/@adobe/react-native-acpcampaign.svg)

`@adobe/react-native-acpcampaign` is a wrapper around the iOS and Android [AEP Campaign SDK](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-campaign-standard) to allow for integration with React Native applications. Functionality to enable Campaign Standard is provided entirely through JavaScript documented below.


## Installation

You need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project. Before installing the Campaign extension it is required to install the Core extension `@adobe/react-native-acpcore`.

> Note: If you are new to React Native we suggest you follow the [React Native Getting Started](<https://facebook.github.io/react-native/docs/getting-started.html>) page before continuing.


### 1. Create React Native project

First create a React Native project:

```bash
react-native init MyReactApp
```

### 2. Install JavaScript packages

Install and link the `@adobe/react-native-acpcampaign` package:

```bash
cd MyReactApp
npm install @adobe/react-native-acpcampaign
react-native link @adobe/react-native-acpcampaign
```

## Tests
This project contains jest unit tests, to run the tests locally:
```
make run-tests-locally
```

## Usage

### [Campaign](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-campaign-standard)

##### Importing the extension:
```javascript
import {ACPCampaign} from '@adobe/react-native-acpcampaign';
```

##### Getting the extension version:

```javascript
ACPCampaign.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPCampaign version: " + version));
```

##### Registering the extension with ACPCore:

```javascript
ACPCampaign.registerExtension();
```

##### Set linkage fields

```javascript
ACPCampaign.setLinkageFields({"linkageKey": "linkageValue"});
```
##### Reset linkage fields

```javascript
ACPCampaign.resetLinkageFields();
```

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md)

## License
See [LICENSE](LICENSE)
