import { NativeModules } from 'react-native';
import ACPCampaign from '../js/ACPCampaign';

describe('ACPCampaign', () => {

  test('extensionVersion is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPCampaign, 'extensionVersion');
    await ACPCampaign.extensionVersion();
    expect(spy).toHaveBeenCalled();
  });

  test('registerExtension is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPCampaign, 'registerExtension');
    await ACPCampaign.registerExtension();
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
