// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.getEntitlements": {
      type: "done.invoke.getEntitlements";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.refreshEntitlements": {
      type: "done.invoke.refreshEntitlements";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.getEntitlements": {
      type: "error.platform.getEntitlements";
      data: unknown;
    };
    "error.platform.refreshEntitlements": {
      type: "error.platform.refreshEntitlements";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    getEntitlements: "done.invoke.getEntitlements";
    refreshEntitlements: "done.invoke.refreshEntitlements";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignEntitlements: "done.invoke.getEntitlements";
    assignGetEntitlementsError:
      | "error.platform.getEntitlements"
      | "error.platform.refreshEntitlements";
    clearGetEntitlementsError:
      | "REFRESH"
      | "done.invoke.refreshEntitlements"
      | "xstate.init";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getEntitlements: "done.invoke.refreshEntitlements" | "xstate.init";
    refreshEntitlements: "REFRESH";
  };
  matchesStates:
    | "error"
    | "gettingEntitlements"
    | "idle"
    | "refresh"
    | "success";
  tags: never;
}
