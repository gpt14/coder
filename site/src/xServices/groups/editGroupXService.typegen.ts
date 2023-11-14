// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.editGroup.loading:invocation[0]": {
      type: "done.invoke.editGroup.loading:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.editGroup.updating:invocation[0]": {
      type: "done.invoke.editGroup.updating:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.editGroup.loading:invocation[0]": {
      type: "error.platform.editGroup.loading:invocation[0]";
      data: unknown;
    };
    "error.platform.editGroup.updating:invocation[0]": {
      type: "error.platform.editGroup.updating:invocation[0]";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    loadGroup: "done.invoke.editGroup.loading:invocation[0]";
    updateGroup: "done.invoke.editGroup.updating:invocation[0]";
  };
  missingImplementations: {
    actions: "onUpdate";
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignError: "error.platform.editGroup.updating:invocation[0]";
    assignGroup: "done.invoke.editGroup.loading:invocation[0]";
    displayLoadGroupError: "error.platform.editGroup.loading:invocation[0]";
    onUpdate: "done.invoke.editGroup.updating:invocation[0]";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    loadGroup: "xstate.init";
    updateGroup: "UPDATE";
  };
  matchesStates: "idle" | "loading" | "updating";
  tags: never;
}
