import { readFileSync } from "fs";
import { join } from "path";

export default function getBySlug(
  dir: string,
  slug: string
): Record<string, unknown> {
  //   const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${slug}.json`);
  const data = readFileSync(fullPath, "utf8");
  //   const { data } = matter(fileContents);

  return JSON.parse(data);
}
