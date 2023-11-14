// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.portForwardMachine.loading:invocation[0]": {
      type: "done.invoke.portForwardMachine.loading:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    getListeningPorts: "done.invoke.portForwardMachine.loading:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignListeningPorts: "done.invoke.portForwardMachine.loading:invocation[0]";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getListeningPorts: "xstate.init";
  };
  matchesStates: "loading" | "success";
  tags: never;
}
