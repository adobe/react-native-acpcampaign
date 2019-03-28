/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2019 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

#import "RCTACPCampaign.h"
#import "ACPCampaign.h"

@implementation RCTACPCampaign

RCT_EXPORT_MODULE(ACPCampaign);

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(extensionVersion: (RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock)reject) {
    resolve([ACPCampaign extensionVersion]);
}

RCT_EXPORT_METHOD(registerExtension) {
    [ACPCampaign registerExtension];
}

RCT_EXPORT_METHOD(setLinkageFields: (nonnull NSDictionary<NSString*, NSString*>*) linkageFields) {
    [ACPCampaign setLinkageFields:linkageFields];
}

RCT_EXPORT_METHOD(resetLinkageFields) {
    [ACPCampaign resetLinkageFields];
}

@end
