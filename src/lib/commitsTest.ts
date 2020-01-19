import { Commits } from ".";

const commits = new Commits();

(async () => {
  await commits.init();
})();
