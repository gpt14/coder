// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.createFirstUser": {
      type: "done.invoke.createFirstUser";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.createFirstUser": {
      type: "error.platform.createFirstUser";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    createFirstUser: "done.invoke.createFirstUser";
  };
  missingImplementations: {
    actions: "onCreateFirstUser";
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignError: "error.platform.createFirstUser";
    assignFirstUserData: "CREATE_FIRST_USER";
    clearError: "CREATE_FIRST_USER";
    onCreateFirstUser: "done.invoke.createFirstUser";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    createFirstUser: "CREATE_FIRST_USER";
  };
  matchesStates: "creatingFirstUser" | "firstUserCreated" | "idle";
  tags: "loading";
}
