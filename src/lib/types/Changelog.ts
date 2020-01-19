export interface ChangelogEntry {
  title?: string;
  description: string;
  commitHash: string;
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
