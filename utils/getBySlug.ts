// import * as fs from "fs";
import { readFileSync } from "fs";
import { join } from "path";

export default function getBySlug(
  dir: string,
  slug: string
): Record<string, unknown> {
  const fullPath = join(dir, `${slug}.json`);
  const data = readFileSync(fullPath, "utf8");
  try {
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}
