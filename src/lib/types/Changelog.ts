import { SemanticTypeAction } from "./SemanticType";

export interface ChangelogEntry {
  authorName?: string;
  description: string;
  commitHash: string;
  type: SemanticTypeAction;
}

export interface ChangelogSection {
  uid: string;
  title?: string;
  tag?: string;
  date: number;
  entries: ChangelogEntry[];
}

export interface Changelog {
  sections: ChangelogSection[];
}
