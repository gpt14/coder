// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.userSecuritySettings.updatingSecurity:invocation[0]": {
      type: "done.invoke.userSecuritySettings.updatingSecurity:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.userSecuritySettings.updatingSecurity:invocation[0]": {
      type: "error.platform.userSecuritySettings.updatingSecurity:invocation[0]";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    updateSecurity: "done.invoke.userSecuritySettings.updatingSecurity:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignError: "error.platform.userSecuritySettings.updatingSecurity:invocation[0]";
    clearError: "UPDATE_SECURITY";
    notifyUpdate: "done.invoke.userSecuritySettings.updatingSecurity:invocation[0]";
    redirectToHome: "done.invoke.userSecuritySettings.updatingSecurity:invocation[0]";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    updateSecurity: "UPDATE_SECURITY";
  };
  matchesStates: "idle" | "updatingSecurity";
  tags: never;
}
