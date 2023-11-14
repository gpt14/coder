// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.getQuota": {
      type: "done.invoke.getQuota";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.getQuota": {
      type: "error.platform.getQuota";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    getQuota: "done.invoke.getQuota";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignGetQuotaError: "error.platform.getQuota";
    assignQuota: "done.invoke.getQuota";
    clearGetQuotaError: "xstate.init";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getQuota: "xstate.init";
  };
  matchesStates: "gettingQuotas" | "idle" | "success";
  tags: never;
}
