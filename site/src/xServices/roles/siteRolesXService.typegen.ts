// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "": { type: "" };
    "done.invoke.getRoles": {
      type: "done.invoke.getRoles";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.getRoles": {
      type: "error.platform.getRoles";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    getRoles: "done.invoke.getRoles";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignGetRolesError: "error.platform.getRoles";
    assignRoles: "done.invoke.getRoles";
    clearGetRolesError: "";
    displayGetRolesError: "error.platform.getRoles";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    hasPermission: "";
  };
  eventsCausingServices: {
    getRoles: "";
  };
  matchesStates: "done" | "gettingRoles" | "initializing";
  tags: never;
}
