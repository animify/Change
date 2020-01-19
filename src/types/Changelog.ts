export interface ChangelogEntry {
  title?: string;
  description: string;
  commitHash: string;
}

export interface ChangelogSection {
  title?: string;
  tag?: string;
  date: number;
  entries: ChangelogEntry[];
}

export type Changelog = ChangelogSection[];
