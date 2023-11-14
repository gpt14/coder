// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.getAppearance": {
      type: "done.invoke.getAppearance";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.setAppearance": {
      type: "done.invoke.setAppearance";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.getAppearance": {
      type: "error.platform.getAppearance";
      data: unknown;
    };
    "error.platform.setAppearance": {
      type: "error.platform.setAppearance";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    getAppearance: "done.invoke.getAppearance";
    setAppearance: "done.invoke.setAppearance";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignAppearance: "done.invoke.getAppearance" | "done.invoke.setAppearance";
    assignGetAppearanceError: "error.platform.getAppearance";
    assignPreviewAppearance: "SET_PREVIEW_APPEARANCE";
    clearGetAppearanceError: "SET_PREVIEW_APPEARANCE" | "xstate.init";
    notifyUpdateAppearanceSuccess: "done.invoke.setAppearance";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getAppearance: "xstate.init";
    setAppearance: "SAVE_APPEARANCE";
  };
  matchesStates: "gettingAppearance" | "idle" | "savingAppearance";
  tags: never;
}
