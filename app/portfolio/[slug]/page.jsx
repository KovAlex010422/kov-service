import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/sections/Footer/Footer";
import Gallery from "@/src/components/portfolio/Gallery";

import { projects } from "@/src/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({
  params,
}) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.id === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <Link
            href="/portfolio"
            className="
              inline-flex
              items-center
              gap-2
              mb-8
              text-orange-500
              hover:text-orange-600
            "
          >
            ← Повернутися до портфоліо
          </Link>

          <h1 className="text-5xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-orange-500 mb-2">
            {project.category}
            {project.year &&
              ` • ${project.year}`}
          </p>

          <p className="text-slate-600 mb-12">
            {project.description}
          </p>

          {project.images?.length > 0 && (
            <Gallery
              images={project.images}
              title={project.title}
            />
          )}

          {project.videos?.length > 0 && (
            <>
              <h2 className="text-3xl font-bold mb-6">
                Відео роботи
              </h2>

              <div className="space-y-8">
                {project.videos.map(
                  (video, index) => (
                    <iframe
                      key={index}
                      src={video}
                      title={`video-${index}`}
                      className="
                        w-full
                        aspect-video
                        rounded-2xl
                        shadow-lg
                      "
                      allowFullScreen
                    />
                  )
                )}
              </div>
            </>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}