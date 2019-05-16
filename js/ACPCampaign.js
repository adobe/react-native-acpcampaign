/*
Copyright 2019 Adobe. All rights reserved.
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

'use strict';

const RCTACPCampaign = require('react-native').NativeModules.ACPCampaign;

module.exports = {
  /**
   * Returns the version of the ACPCampaign extension
   * @param  {string} Promise a promise that resolves with the extension verison
   */
  extensionVersion(): Promise<string> {
    return Promise.resolve(RCTACPCampaign.extensionVersion());
  },

  /**
   * Registers the ACPCampaign extension with ACPCore
   */
  registerExtension() {
    RCTACPCampaign.registerExtension();
  },

  /**
   * @brief Sets the Campaign linkage fields (CRM IDs) in the mobile SDK to be used for downloading personalized messages from Campaign.
   *
   * The set linkage fields are stored as base64 encoded JSON string in memory and they are sent in a custom HTTP header 'X-InApp-Auth'
   * in all future Campaign rules download requests until ACPCampaign::resetLinkageFields is invoked. These in-memory variables are also
   * lost in the wake of an Application crash event or upon graceful Application termination or when the privacy status is updated to
   * \ref ACPMobilePrivacyStatusOptOut.
   *
   * This method clears cached rules from previous download before triggering a rules download request to the configured Campaign server.
   * If the current SDK privacy status is not \ref ACPMobilePrivacyStatusOptIn, no rules download happens.
   *
   * @param linkageFields a dictionary containing linkage field key-value pairs
   * @see ACPMobilePrivacyStatus
   */
  setLinkageFields(linkageFields: { string: string }) {
    RCTACPCampaign.setLinkageFields(linkageFields);
  },

  /**
   * @brief Clears previously stored linkage fields in the mobile SDK and triggers Campaign rules download request to the configured Campaign server.
   *
   * This method unregisters any previously registered rules with the Event Hub and clears cached rules from previous download.
   * If the current SDK privacy status is not \ref ACPMobilePrivacyStatusOptIn, no rules download happens.
   *
   * @see ACPMobilePrivacyStatus
   */
  resetLinkageFields() {
    RCTACPCampaign.resetLinkageFields();
  },

};
