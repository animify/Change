// import semver from "semver";
import execa from "execa";
//@ts-ignore
import parser from "git-log-parser";
import toArray from "stream-to-array";

export default class Commits {
  constructor() {
    if (!(typeof module !== "undefined" && module.exports)) {
      throw new Error(
        "Commits class can only be created in a Node environment."
      );
    }
  }

  public async init() {
    const isWorkingTreeClean = await this.isWorkingTreeClean();

    console.log("isWorkingTreeClean", isWorkingTreeClean);

    const getCommits = await this.getCommits();

    console.log("getCommits", getCommits);
  }

  public async getLatestTag() {
    const { stdout } = await execa("git", ["describe", "--abbrev=0", "--tags"]);
    return stdout;
  }

  public async getCommits() {
    const latestTag = await this.getLatestTag();
    // const { stdout } = await execa("git", [
    //   "log",
    //   `${latestTag}...HEAD`,
    //   "--oneline"
    // ]);

    return toArray(parser.parse({ _: `${latestTag}...HEAD` }));
  }

  public async isWorkingTreeClean() {
    try {
      const { stdout: status } = await execa("git", ["status", "--porcelain"]);

      return status === "";
    } catch (_) {
      return false;
    }
  }
}
