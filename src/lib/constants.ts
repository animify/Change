import {
  SemanticType,
  SemanticTypeData,
  SemanticTypeAction
} from "./types/SemanticType";

export const SEMANTIC_COMMIT_TYPES: Record<SemanticType, SemanticTypeData> = {
  breaking: {
    type: "breaking",
    description: "Description for breaking",
    action: SemanticTypeAction.major
  },
  feat: {
    type: "feat",
    description: "Description for feat",
    action: SemanticTypeAction.minor
  },
  fix: {
    type: "fix",
    description: "Description for fix",
    action: SemanticTypeAction.patch
  },
  refactor: {
    type: "refactor",
    description: "Description for refactor",
    action: SemanticTypeAction.patch
  },
  chore: {
    type: "chore",
    description: "Description for chore",
    action: SemanticTypeAction.ignore
  },
  test: {
    type: "test",
    description: "Description for test",
    action: SemanticTypeAction.ignore
  },
  style: {
    type: "style",
    description: "Description for style",
    action: SemanticTypeAction.ignore
  },
  perf: {
    type: "perf",
    description: "Description for perf",
    action: SemanticTypeAction.patch
  },
  docs: {
    type: "docs",
    description: "Description for docs",
    action: SemanticTypeAction.ignore
  }
};
