export type SemanticType =
  | "breaking"
  | "feat"
  | "refactor"
  | "chore"
  | "fix"
  | "test"
  | "style"
  | "perf"
  | "docs";

export enum SemanticTypeAction {
  major,
  minor,
  patch,
  ignore
}

export interface SemanticTypeData {
  type: SemanticType;
  description: string;
  action: SemanticTypeAction;
}
