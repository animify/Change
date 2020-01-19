import { SemanticType, SemanticTypeData } from "./types/SemanticType";

export const SEMANTIC_COMMIT_TYPES: Record<SemanticType, SemanticTypeData> = {
  feat: {
    type: "feat",
    description: "feat"
  },
  fix: {
    type: "fix",
    description: "fix"
  },
  refactor: {
    type: "refactor",
    description: "refactor"
  },
  chore: {
    type: "chore",
    description: "chore"
  },
  test: {
    type: "test",
    description: "test"
  },
  style: {
    type: "style",
    description: "style"
  },
  perf: {
    type: "perf",
    description: "perf"
  },
  docs: {
    type: "docs",
    description: "docs"
  }
};
