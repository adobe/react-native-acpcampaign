/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

@format
*/

import { NativeModules } from 'react-native';
import ACPCampaign from '../js/ACPCampaign';

describe('ACPCampaign', () => {

  test('extensionVersion is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPCampaign, 'extensionVersion');
    await ACPCampaign.extensionVersion();
    expect(spy).toHaveBeenCalled();
  });
  
  test('setLinkageFields is called with correct parameters', async () => {
  const spy = jest.spyOn(NativeModules.ACPCampaign, 'setLinkageFields');
    let data = {"testKey": "testValue"};
    await ACPCampaign.setLinkageFields(data);
    expect(spy).toHaveBeenCalledWith(data);
  });

  test('resetLinkageFields is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPCampaign, 'resetLinkageFields');
    await ACPCampaign.resetLinkageFields();
    expect(spy).toHaveBeenCalled();
  });

});
