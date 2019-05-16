/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
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
