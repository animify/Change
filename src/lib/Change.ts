import {
  ChangelogSection,
  ChangelogEntry,
  Changelog
} from "../types/Changelog";
import ChangeHelper from "./ChangeHelper";

export default class Change extends ChangeHelper {
  public addSection(sectionData: Partial<ChangelogSection>) {
    const section = this.createSection(sectionData);

    this.sections.push(section);
  }

  public deleteSection(sectionUid: string) {
    const sectionIndex = this.getSectionIndex(sectionUid);

    if (sectionIndex > -1) {
      this.sections.splice(sectionIndex, 1);
    } else {
      throw new Error(
        `Change: Section ${sectionUid} not found and could not be deleted.`
      );
    }
  }

  public addEntry(entry: ChangelogEntry, sectionUid: string) {
    const section = this.getSection(sectionUid);

    if (section) {
      section.entries.push(entry);
    } else {
      throw new Error(
        `Change: Section ${sectionUid} not found so entry could not be added.`
      );
    }
  }

  public get changelog(): Changelog {
    return {
      sections: this.sections
    };
  }
}
