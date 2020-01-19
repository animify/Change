import { ChangelogSection } from "./types";
import cuid from "cuid";

export default class ChangeHelper {
  protected sections: ChangelogSection[] = [];

  protected sortSections() {
    this.sections.sort((a, b) => b.date - a.date);
  }

  protected createSection(
    sectionData: Partial<ChangelogSection>
  ): ChangelogSection {
    const section: ChangelogSection = {
      ...this.sectionDefaults(),
      ...sectionData
    };

    return section;
  }

  protected getSection(sectionUid: string) {
    return this.sections.find(section => section.uid === sectionUid);
  }

  protected getSectionIndex(sectionUid: string) {
    return this.sections.findIndex(section => section.uid === sectionUid);
  }

  private sectionDefaults = (): ChangelogSection => ({
    uid: cuid.slug(),
    date: Date.now(),
    entries: []
  });
}
