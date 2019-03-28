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
import {ACPCore, ACPLifecycle, ACPSignal, ACPIdentity, ACPMobileLogLevel, ACPMobilePrivacyStatus, ACPMobileVisitorAuthenticationState, ACPVisitorID, ACPExtensionEvent} from 'react-native-acpcore';
import {ACPCampaign} from 'react-native-acpcampaign';

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
    // console.log("AdobeExperienceSDK IMPORT: ACPCore = " + ACPCore);
    // console.log("AdobeExperienceSDK IMPORT: ACPLifecycle = " + ACPLifecycle);
    // console.log("AdobeExperienceSDK IMPORT: ACPSignal = " + ACPSignal);
    // console.log("AdobeExperienceSDK IMPORT: ACPIdentity = " + ACPIdentity);
    // console.log("AdobeExperienceSDK IMPORT: ACPMobileLogLevel = " + ACPMobileLogLevel);
    // console.log("AdobeExperienceSDK IMPORT: ACPMobilePrivacyStatus = " + ACPMobilePrivacyStatus);
    // console.log("AdobeExperienceSDK IMPORT: ACPMobileVisitorAuthenticationState = " + ACPMobileVisitorAuthenticationState);
    // console.log("AdobeExperienceSDK IMPORT: ACPVisitorID = " + ACPVisitorID);
    ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE);
    ACPCore.configureWithAppId("launch-ENdd92076b6d40443284824b50647ac784");
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
