/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, NativeModules} from 'react-native';
import {ACPCore, ACPLifecycle, ACPSignal, ACPIdentity, ACPMobileLogLevel, ACPMobilePrivacyStatus, ACPMobileVisitorAuthenticationState, ACPVisitorID, ACPExtensionEvent} from '@adobe/react-native-acpcore';
import {ACPCampaign} from '@adobe/react-native-acpcampaign';

type Props = {};
export default class App extends Component<Props> {
  render() {
    this.initSDK();
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ marginTop: 75 }}>
        <Text style={styles.welcome}>ACPCampaign Test App</Text>
        <Button title="ACPCampaign::extensionVersion()" onPress={() => this.extensionVersion()}/>
        <Button title="ACPCampaign::setLinkageFields()" onPress={() => this.setLinkageFields()}/>
        <Button title="ACPCampaign::resetLinkageFields()" onPress={() => this.resetLinkageFields()}/>
        </ScrollView>
      </View>
    );
  }

  initSDK() {
    ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE);
    ACPCore.configureWithAppId("launch-EN1a68f9bc5b3c475b8c232adc3f8011fb");
    ACPLifecycle.registerExtension();
    ACPIdentity.registerExtension();
    ACPSignal.registerExtension();
    ACPCampaign.registerExtension();
    ACPCore.start();
  }

  extensionVersion() {
    ACPCampaign.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPCampaign version: " + version));
  }

  setLinkageFields() {
    ACPCampaign.setLinkageFields({"link1key": "link1value"});
  }

  resetLinkageFields() {
    ACPCampaign.resetLinkageFields();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  }
});
