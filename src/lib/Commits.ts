import semver from "semver";
import execa from "execa";

export default class Commits {
  constructor() {
    if (typeof module !== "undefined" && module.exports) {
      throw new Error(
        "Commits class can only be created in a Node environment."
      );
    }
  }

  public async getLatestTag() {
    const { stdout } = await execa("git", ["describe", "--abbrev=0", "--tags"]);
    return stdout;
  }

  public getCommits() {}

  public async isWorkingTreeClean() {
    try {
      const { stdout: status } = await execa("git", ["status", "--porcelain"]);

      return status === "";
    } catch (_) {
      return false;
    }
  }
}
