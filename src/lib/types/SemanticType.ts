export type SemanticType =
  | "feat"
  | "refactor"
  | "chore"
  | "fix"
  | "test"
  | "style"
  | "perf"
  | "docs";

export interface SemanticTypeData {
  type: SemanticType;
  description: string;
}
