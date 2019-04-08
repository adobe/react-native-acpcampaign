
package com.adobe.marketing.mobile.reactnative.campaign;

import android.util.Log;

import com.adobe.marketing.mobile.Campaign;
import com.adobe.marketing.mobile.InvalidInitException;
import com.adobe.marketing.mobile.reactnative.campaign.RCTACPCampaignMapUtil;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

public class RCTACPCampaignModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RCTACPCampaignModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "ACPCampaign";
  }

  @ReactMethod
  public void extensionVersion(final Promise promise) {
      promise.resolve(Campaign.extensionVersion());
  }

  @ReactMethod
  public void registerExtension() {
      try {
          Campaign.registerExtension();
      } catch (InvalidInitException e) {
          Log.d(getName(), "Registering Campaign extension failed with error: " + e.getMessage());
      }
  }

  @ReactMethod
  public void setLinkageFields(final ReadableMap linkageFields) {
      Campaign.setLinkageFields(RCTACPCampaignMapUtil.toStringMap(linkageFields));
  }

  @ReactMethod
  public void resetLinkageFields() {
    Campaign.resetLinkageFields();
  }

}
