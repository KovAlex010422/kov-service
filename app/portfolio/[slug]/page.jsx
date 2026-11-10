"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/sections/Footer/Footer";
import { projects } from "@/src/data/projects";

export default function ProjectPage({ params }) {
  const [project, setProject] = useState(null);
  const [selectedIndex, setSelectedIndex] =
    useState(null);

  useEffect(() => {
    const loadProject = async () => {
      const { slug } = await params;

      const currentProject = projects.find(
        (item) => item.id === slug
      );

      if (!currentProject) {
        notFound();
      }

      setProject(currentProject);
    };

    loadProject();
  }, [params]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex]);

  if (!project) {
    return null;
  }

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
            ← Back to Portfolio
          </Link>

          <h1 className="text-5xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-orange-500 mb-2">
            {project.category}
          </p>

          <p className="text-slate-600 mb-12">
            {project.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {project.images.map(
              (image, index) => (
                <div
                  key={image}
                  className="
                    relative
                    h-[400px]
                    overflow-hidden
                    rounded-2xl
                    cursor-pointer
                  "
                  onClick={() =>
                    setSelectedIndex(index)
                  }
                >
                  <Image
                    src={image}
                    alt={project.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="
                      object-cover
                      hover:scale-105
                      transition-transform
                      duration-300
                    "
                  />
                </div>
              )
            )}

          </div>

        </div>

      </main>

      <Footer />

      {selectedIndex !== null && (
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
                rounded-full
                bg-white
                text-black
                font-bold
                shadow-lg
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
                rounded-full
                bg-white
                text-black
                text-2xl
                font-bold
                shadow-lg
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
                rounded-full
                bg-white
                text-black
                text-2xl
                font-bold
                shadow-lg
              "
            >
              →
            </button>

            <div
              className="
                absolute
                top-6
                left-6
                bg-black/70
                text-white
                px-4
                py-2
                rounded-xl
              "
            >
              {selectedIndex + 1} /{" "}
              {project.images.length}
            </div>

            <div
              className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
                bg-black/70
                text-white
                px-6
                py-3
                rounded-xl
              "
            >
              {project.title}
            </div>

          </div>
        </div>
      )}
    </>
  );
}