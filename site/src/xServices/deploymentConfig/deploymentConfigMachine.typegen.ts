// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.deploymentConfigMachine.config:invocation[0]": {
      type: "done.invoke.deploymentConfigMachine.config:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.deploymentConfigMachine.daus:invocation[0]": {
      type: "done.invoke.deploymentConfigMachine.daus:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.deploymentConfigMachine.config:invocation[0]": {
      type: "error.platform.deploymentConfigMachine.config:invocation[0]";
      data: unknown;
    };
    "error.platform.deploymentConfigMachine.daus:invocation[0]": {
      type: "error.platform.deploymentConfigMachine.daus:invocation[0]";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    getDeploymentDAUs: "done.invoke.deploymentConfigMachine.daus:invocation[0]";
    getDeploymentValues: "done.invoke.deploymentConfigMachine.config:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignDeploymentDAUs: "done.invoke.deploymentConfigMachine.daus:invocation[0]";
    assignDeploymentValues: "done.invoke.deploymentConfigMachine.config:invocation[0]";
    assignGetDeploymentDAUsError: "error.platform.deploymentConfigMachine.daus:invocation[0]";
    assignGetDeploymentValuesError: "error.platform.deploymentConfigMachine.config:invocation[0]";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getDeploymentDAUs:
      | "done.invoke.deploymentConfigMachine.config:invocation[0]"
      | "error.platform.deploymentConfigMachine.config:invocation[0]";
    getDeploymentValues: "xstate.init";
  };
  matchesStates: "config" | "daus" | "done";
  tags: "loading";
}
