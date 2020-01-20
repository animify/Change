import semver from "semver";
import execa from "execa";
import { ChangelogEntry, SemanticTypeAction } from "./types";

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
    const commits: ChangelogEntry[] = [];

    const { stdout } = execa("git", [
      "log",
      `${latestTag}...HEAD`,
      `--pretty=format:%h\n%an\n%s`
    ]);

    stdout?.on("data", (data: Buffer) => {
      const [commitHash, authorName, commit] = data
        .toString()
        .trim()
        .split("\n");

      const [type, description] = commit.split(":");

      const entry: ChangelogEntry = {
        authorName,
        commitHash,
        type: (type?.trim() as unknown) as SemanticTypeAction,
        description: description?.trim()
      };

      console.log("built entry", entry);

      commits.push(entry);
    });

    stdout?.on("close", () => {
      console.log("commits", commits);
    });
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
