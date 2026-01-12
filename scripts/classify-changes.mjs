import { execSync } from "child_process";

const diff = execSync(
  "git diff --name-status origin/main...HEAD",
  { encoding: "utf8" }
);

let mode = "none";

for (const line of diff.split("\n")) {
  if (!line) continue;
  const [type, file] = line.split(/\s+/);

  if (type === "A" && file.endsWith(".md")) {
    mode = "new";
    break;
  }
  if (type === "M" && file.endsWith(".md")) {
    mode = "edit";
    // Don't break, as we want to check for new files too
  }
}

console.log(`MODE=${mode}`);
