/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

@flow
@format
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, NativeModules} from 'react-native';
import {ACPCore, ACPMobilePrivacyStatus} from '@adobe/react-native-acpcore';
import {ACPCampaign} from '@adobe/react-native-acpcampaign';

type Props = {};
export default class App extends Component<Props> {

    constructor() {
        super();
        this.state = {
            coreVersion: 'unknown',
            campaignVersion: 'unknown',
            collectPIICalled: 'false'
      }
    }

    extensionVersion() {
        ACPCore.extensionVersion().then(version =>
            this.setState({coreVersion: version})
        );
        ACPCampaign.extensionVersion().then(version =>
            this.setState({campaignVersion: version})
        );
    }

    collectPII() {
        ACPCore.collectPii({
            "cusFirstName" : "First",
            "cusLastName": "Last",
            "cusEmail" : "name@email.com"
        });
        this.setState({collectPIICalled: 'true'})
    }


    setLinkageFields() {
        ACPCampaign.setLinkageFields({
            "cusFirstName" : "First",
            "cusLastName": "Last",
            "cusEmail" : "name@email.com"}
        );
    }

    resetLinkageFields() {
        ACPCampaign.resetLinkageFields();
    }

    testCampaignAlertMessage() {
        ACPCore.trackAction("aaronsCart", new Map());
    }

    testCampaignFullScreenMessage() {
        ACPCore.trackAction("aaronsFSM", new Map());
    }

    testCampaignPersonalizedMessage() {
        ACPCore.trackAction("aaronPM", new Map());
    }

    testOPTIn() {
        ACPCore.setPrivacyStatus(ACPMobilePrivacyStatus.OPT_IN);
    }

    testOPTOut() {
        ACPCore.setPrivacyStatus(ACPMobilePrivacyStatus.OPT_OUT);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ marginTop: 75 }}>
                    <Button style={styles.button} title="ACPCampaign::extensionVersion()" onPress={() => this.extensionVersion()}/>
                    <Button title="ACPCampaign::CollectPII" onPress={() => this.collectPII()}/>
                    <Button title="ACPCampaign::setLinkageFields()" onPress={() => this.setLinkageFields()}/>
                    <Button title="ACPCampaign::resetLinkageFields()" onPress={() => this.resetLinkageFields()}/>
                    <Button title="Test Campaign Alert Message" onPress={() => this.testCampaignAlertMessage()}/>
                    <Button title="Test Campaign Full Screen Message" onPress={() => this.testCampaignFullScreenMessage()}/>
                    <Button title="Test Campaign Personalized Message" onPress={() => this.testCampaignPersonalizedMessage()}/>
                    <Button title="Test OPT In" onPress={() => this.testOPTIn()}/>
                    <Button title="Test OPT Out" onPress={() => this.testOPTOut()}/>
                    <Text style={styles.instructions}> {"Core version : " + this.state.coreVersion} </Text>
                    <Text style={styles.instructions}> {"Campaign version : " + this.state.campaignVersion} </Text>
                    <Text style={styles.instructions}> {"Collect PII method successfully called : " + this.state.collectPIICalled} </Text>
                </ScrollView>
            </View>
       );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
