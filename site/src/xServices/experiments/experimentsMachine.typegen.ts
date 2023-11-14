// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.getExperiments": {
      type: "done.invoke.getExperiments";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.getExperiments": {
      type: "error.platform.getExperiments";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    getExperiments: "done.invoke.getExperiments";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignExperiments: "done.invoke.getExperiments";
    assignGetExperimentsError: "error.platform.getExperiments";
    clearExperiments: "error.platform.getExperiments";
    clearGetExperimentsError: "done.invoke.getExperiments";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getExperiments: "xstate.init";
  };
  matchesStates: "failure" | "gettingExperiments" | "success";
  tags: never;
}
