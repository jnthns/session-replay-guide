export type Platform = 'web' | 'ios' | 'android' | 'react-native';

export type AnalyticsSource =
  | 'amplitude-browser-sdk'
  | 'maintenance-js-sdk'
  | 'gtm'
  | 'segment'
  | 'third-party'
  | 'http-api-warehouse'
  | 'amplitude-swift-sdk'
  | 'maintenance-ios-sdk'
  | 'ios-third-party'
  | 'amplitude-kotlin-sdk'
  | 'maintenance-android-sdk'
  | 'android-third-party'
  | 'amplitude-rn-sdk'
  | 'segment-rn';

export type ImplementationMethod =
  | 'browser-plugin'
  | 'standalone-sr-sdk'
  | 'standalone-sr-sdk-segment'
  | 'standalone-sr-sdk-legacy'
  | 'gtm-plugin'
  | 'standalone-sr-sdk-warehouse'
  | 'ios-plugin'
  | 'ios-middleware'
  | 'ios-standalone-sdk'
  | 'android-plugin'
  | 'android-middleware'
  | 'android-standalone-sdk'
  | 'rn-plugin'
  | 'rn-segment-plugin';

export type StepId =
  | 'platform'
  | 'source'
  | 'method'
  | 'setup'
  | 'sampling'
  | 'privacy'
  | 'validation'
  | 'debugging';

export type CalloutType = 'tip' | 'warning' | 'critical';

export interface Callout {
  steps: StepId[];
  platforms: Platform[];
  sources: AnalyticsSource[];
  type: CalloutType;
  title: string;
  body: string;
  link?: { label: string; url: string };
  internalLink?: { label: string; to: string };
}

export type ContentItem = string | {
  text: string;
  link?: { label: string; url: string };
};

export interface PlatformOption {
  id: Platform;
  label: string;
  description: string;
}

export interface SourceOption {
  id: AnalyticsSource;
  label: string;
  description: string;
  platforms: Platform[];
}

export interface MethodInfo {
  id: ImplementationMethod;
  label: string;
  description: string;
  docsUrl?: string;
}

export interface SetupContent {
  installCommands: string[];
  codeSnippet: string;
  language: string;
  notes: ContentItem[];
}

export interface WizardState {
  platform: Platform | null;
  source: AnalyticsSource | null;
  method: ImplementationMethod | null;
  currentStep: number;
  completedSteps: number[];
}
