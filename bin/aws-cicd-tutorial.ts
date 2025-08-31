#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCicdTutorialStack } from '../lib/aws-cicd-tutorial-stack';

const app = new cdk.App();
new AwsCicdTutorialStack(app, 'AwsCicdTutorialStack', {
  
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

});