// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.templateVariablesState.creatingTemplateVersion:invocation[0]": {
      type: "done.invoke.templateVariablesState.creatingTemplateVersion:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.templateVariablesState.gettingActiveTemplateVersion:invocation[0]": {
      type: "done.invoke.templateVariablesState.gettingActiveTemplateVersion:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.templateVariablesState.gettingTemplateVariables:invocation[0]": {
      type: "done.invoke.templateVariablesState.gettingTemplateVariables:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.templateVariablesState.updatingTemplate:invocation[0]": {
      type: "done.invoke.templateVariablesState.updatingTemplate:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.templateVariablesState.waitingForJobToBeCompleted:invocation[0]": {
      type: "done.invoke.templateVariablesState.waitingForJobToBeCompleted:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.templateVariablesState.creatingTemplateVersion:invocation[0]": {
      type: "error.platform.templateVariablesState.creatingTemplateVersion:invocation[0]";
      data: unknown;
    };
    "error.platform.templateVariablesState.gettingActiveTemplateVersion:invocation[0]": {
      type: "error.platform.templateVariablesState.gettingActiveTemplateVersion:invocation[0]";
      data: unknown;
    };
    "error.platform.templateVariablesState.gettingTemplateVariables:invocation[0]": {
      type: "error.platform.templateVariablesState.gettingTemplateVariables:invocation[0]";
      data: unknown;
    };
    "error.platform.templateVariablesState.updatingTemplate:invocation[0]": {
      type: "error.platform.templateVariablesState.updatingTemplate:invocation[0]";
      data: unknown;
    };
    "error.platform.templateVariablesState.waitingForJobToBeCompleted:invocation[0]": {
      type: "error.platform.templateVariablesState.waitingForJobToBeCompleted:invocation[0]";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    createNewTemplateVersion: "done.invoke.templateVariablesState.creatingTemplateVersion:invocation[0]";
    getActiveTemplateVersion: "done.invoke.templateVariablesState.gettingActiveTemplateVersion:invocation[0]";
    getTemplateVariables: "done.invoke.templateVariablesState.gettingTemplateVariables:invocation[0]";
    updateTemplate: "done.invoke.templateVariablesState.updatingTemplate:invocation[0]";
    waitForJobToBeCompleted: "done.invoke.templateVariablesState.waitingForJobToBeCompleted:invocation[0]";
  };
  missingImplementations: {
    actions: "onUpdateTemplate";
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignActiveTemplateVersion: "done.invoke.templateVariablesState.gettingActiveTemplateVersion:invocation[0]";
    assignCreateTemplateVersionRequest: "UPDATE_TEMPLATE_EVENT";
    assignGetTemplateDataError:
      | "error.platform.templateVariablesState.creatingTemplateVersion:invocation[0]"
      | "error.platform.templateVariablesState.gettingActiveTemplateVersion:invocation[0]"
      | "error.platform.templateVariablesState.gettingTemplateVariables:invocation[0]";
    assignJobError: "done.invoke.templateVariablesState.waitingForJobToBeCompleted:invocation[0]";
    assignNewTemplateVersion:
      | "done.invoke.templateVariablesState.creatingTemplateVersion:invocation[0]"
      | "done.invoke.templateVariablesState.waitingForJobToBeCompleted:invocation[0]";
    assignTemplateVariables: "done.invoke.templateVariablesState.gettingTemplateVariables:invocation[0]";
    assignUpdateTemplateError:
      | "error.platform.templateVariablesState.updatingTemplate:invocation[0]"
      | "error.platform.templateVariablesState.waitingForJobToBeCompleted:invocation[0]";
    clearGetTemplateDataError:
      | "done.invoke.templateVariablesState.gettingActiveTemplateVersion:invocation[0]"
      | "xstate.init";
    clearJobError: "UPDATE_TEMPLATE_EVENT";
    clearUpdateTemplateError: "UPDATE_TEMPLATE_EVENT";
    onUpdateTemplate: "done.invoke.templateVariablesState.updatingTemplate:invocation[0]";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    hasJobError: "done.invoke.templateVariablesState.waitingForJobToBeCompleted:invocation[0]";
  };
  eventsCausingServices: {
    createNewTemplateVersion: "UPDATE_TEMPLATE_EVENT";
    getActiveTemplateVersion: "xstate.init";
    getTemplateVariables: "done.invoke.templateVariablesState.gettingActiveTemplateVersion:invocation[0]";
    updateTemplate: "done.invoke.templateVariablesState.waitingForJobToBeCompleted:invocation[0]";
    waitForJobToBeCompleted: "done.invoke.templateVariablesState.creatingTemplateVersion:invocation[0]";
  };
  matchesStates:
    | "creatingTemplateVersion"
    | "error"
    | "fillingParams"
    | "gettingActiveTemplateVersion"
    | "gettingTemplateVariables"
    | "updated"
    | "updatingTemplate"
    | "waitingForJobToBeCompleted";
  tags: "submitting";
}
