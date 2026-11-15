import { projects } from "@/src/data/projects";

export default function sitemap() {
  const baseUrl =
    "https://kov-service.vercel.app";

  const projectUrls = projects.map(
    (project) => ({
      url: `${baseUrl}/portfolio/${project.id}`,
      lastModified: new Date(),
    })
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
    },

    ...projectUrls,
  ];
}