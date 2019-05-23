
jest.mock('NativeModules', () => ({
  ACPCampaign: {
    extensionVersion: jest.fn(() => new Promise(resolve => resolve())),
    registerExtension: jest.fn(),
    setLinkageFields: jest.fn(),
    resetLinkageFields: jest.fn()
  }
}));
