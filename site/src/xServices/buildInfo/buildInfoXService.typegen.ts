// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.getBuildInfo": {
      type: "done.invoke.getBuildInfo";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.getBuildInfo": {
      type: "error.platform.getBuildInfo";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    getBuildInfo: "done.invoke.getBuildInfo";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignBuildInfo: "done.invoke.getBuildInfo";
    assignGetBuildInfoError: "error.platform.getBuildInfo";
    clearBuildInfo: "error.platform.getBuildInfo";
    clearGetBuildInfoError: "done.invoke.getBuildInfo";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getBuildInfo: "xstate.init";
  };
  matchesStates: "failure" | "gettingBuildInfo" | "success";
  tags: never;
}
