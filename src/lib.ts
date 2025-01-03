import { getCollection } from "astro:content";

export async function getProjects() {
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  const featured = projects
    .filter((project) => project.data.featured)
    .sort((a, b) => a.data.featured! - b.data.featured!);
  const unfeatured = projects.filter((project) => !project.data.featured);
  return [...featured, ...unfeatured];
}
