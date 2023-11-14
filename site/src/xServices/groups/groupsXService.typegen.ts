// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "": { type: "" };
    "done.invoke.groupsMachine.loading:invocation[0]": {
      type: "done.invoke.groupsMachine.loading:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.groupsMachine.loading:invocation[0]": {
      type: "error.platform.groupsMachine.loading:invocation[0]";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    loadGroups: "done.invoke.groupsMachine.loading:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignGroups: "done.invoke.groupsMachine.loading:invocation[0]";
    displayLoadingGroupsError: "error.platform.groupsMachine.loading:invocation[0]";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    cantFetchGroups: "";
  };
  eventsCausingServices: {
    loadGroups: "xstate.init";
  };
  matchesStates: "idle" | "loading";
  tags: never;
}
