import {
  ContentProtectionIntegration,
  ContentProtectionIntegrationFactory
} from "THEOplayer";
import { NagraDrmConfiguration } from "./NagraDrmConfiguration";
import { NagraDrmWidevineContentProtectionIntegration } from "./NagraWidevineIntegration";

export class NagraDrmWidevineContentProtectionIntegrationFactory
  implements ContentProtectionIntegrationFactory {
  build(configuration: NagraDrmConfiguration): ContentProtectionIntegration {
    return new NagraDrmWidevineContentProtectionIntegration(configuration);
  }
}
