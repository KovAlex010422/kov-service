"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/sections/Footer/Footer";

import { projects } from "@/src/data/projects";

export default function ProjectPage({
  params,
}) {
  const project = projects.find(
    (item) => item.id === params.slug
  );

  if (!project) {
    notFound();
  }

  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === project.images.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0
        ? project.images.length - 1
        : prev - 1
    );
  };

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
            <div className="grid md:grid-cols-2 gap-6">

              {project.images.map(
                (image, index) => (
                  <div
                    key={image}
                    onClick={() =>
                      setSelectedIndex(index)
                    }
                    className="
                      relative
                      h-[400px]
                      overflow-hidden
                      rounded-2xl
                      cursor-pointer
                    "
                  >
                    <Image
                      src={image}
                      alt={project.title}
                      fill
                      sizes="50vw"
                      className="object-cover hover:scale-105 transition"
                    />
                  </div>
                )
              )}

            </div>
          )}

          {project.videos?.length > 0 && (
            <>
              <h2 className="text-3xl font-bold mt-16 mb-6">
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

      {selectedIndex !== null &&
        project.images?.length > 0 && (
          <div
            onClick={() =>
              setSelectedIndex(null)
            }
            className="
              fixed
              inset-0
              z-[999]
              bg-black/95
              flex
              items-center
              justify-center
              p-4
            "
          >
            <div
              className="
                relative
                w-full
                h-full
              "
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <Image
                src={
                  project.images[selectedIndex]
                }
                alt={project.title}
                fill
                sizes="100vw"
                className="object-contain"
              />

              <button
                onClick={() =>
                  setSelectedIndex(null)
                }
                className="
                  absolute
                  top-6
                  right-6
                  w-12
                  h-12
                  bg-white
                  rounded-full
                "
              >
                ✕
              </button>

              <button
                onClick={prevImage}
                className="
                  absolute
                  left-6
                  top-1/2
                  -translate-y-1/2
                  w-14
                  h-14
                  bg-white
                  rounded-full
                "
              >
                ←
              </button>

              <button
                onClick={nextImage}
                className="
                  absolute
                  right-6
                  top-1/2
                  -translate-y-1/2
                  w-14
                  h-14
                  bg-white
                  rounded-full
                "
              >
                →
              </button>
            </div>
          </div>
        )}
    </>
  );
}