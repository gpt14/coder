// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.sshKeyState.gettingSSHKey:invocation[0]": {
      type: "done.invoke.sshKeyState.gettingSSHKey:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.sshKeyState.regeneratingSSHKey:invocation[0]": {
      type: "done.invoke.sshKeyState.regeneratingSSHKey:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.sshKeyState.gettingSSHKey:invocation[0]": {
      type: "error.platform.sshKeyState.gettingSSHKey:invocation[0]";
      data: unknown;
    };
    "error.platform.sshKeyState.regeneratingSSHKey:invocation[0]": {
      type: "error.platform.sshKeyState.regeneratingSSHKey:invocation[0]";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    getSSHKey: "done.invoke.sshKeyState.gettingSSHKey:invocation[0]";
    regenerateSSHKey: "done.invoke.sshKeyState.regeneratingSSHKey:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignGetSSHKeyError: "error.platform.sshKeyState.gettingSSHKey:invocation[0]";
    assignRegenerateSSHKeyError: "error.platform.sshKeyState.regeneratingSSHKey:invocation[0]";
    assignSSHKey:
      | "done.invoke.sshKeyState.gettingSSHKey:invocation[0]"
      | "done.invoke.sshKeyState.regeneratingSSHKey:invocation[0]";
    clearGetSSHKeyError: "xstate.init";
    clearRegenerateSSHKeyError: "CONFIRM_REGENERATE_SSH_KEY";
    notifySuccessSSHKeyRegenerated: "done.invoke.sshKeyState.regeneratingSSHKey:invocation[0]";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    getSSHKey: "xstate.init";
    regenerateSSHKey: "CONFIRM_REGENERATE_SSH_KEY";
  };
  matchesStates:
    | "confirmSSHKeyRegenerate"
    | "gettingSSHKey"
    | "loaded"
    | "notLoaded"
    | "regeneratingSSHKey";
  tags: never;
}
