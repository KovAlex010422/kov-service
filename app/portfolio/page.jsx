"use client";

import { useState } from "react";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/sections/Footer/Footer";

import Link from "next/link";
import Image from "next/image";

import { projects } from "@/src/data/projects";

export default function PortfolioPage() {
  const categories = [
    "Усі",
    ...new Set(
      projects.map(
        (project) => project.category
      )
    ),
  ];

  const [activeCategory, setActiveCategory] =
    useState("Усі");

  const filteredProjects =
    activeCategory === "Усі"
      ? projects
      : projects.filter(
        (project) =>
          project.category ===
          activeCategory
      );
  const getCount = (category) => {
    if (category === "Усі") {
      return projects.length;
    }

    return projects.filter(
      (project) => project.category === category
    ).length;
  };
  return (
    <>
      <Header />

      <main className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center mb-4">
            Портфоліо
          </h1>

          <p className="text-center text-slate-600 mb-12">
            Приклади виконаних робіт
          </p>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-3
              mb-12
            "
          >
            {categories.map((category) => (

              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
    px-5
    py-2
    rounded-full
    border
    transition

    ${activeCategory === category
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-slate-700 border-slate-300 hover:border-orange-500"
                  }
  `}
              >
                {category} ({getCount(category)})
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredProjects.map(
              (project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-2xl
                      border
                      border-orange-100
                      hover:shadow-xl
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <div className="relative h-72">

                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover"
                      />

                      {project.videos?.length >
                        0 && (
                          <div
                            className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            bg-black/20
                          "
                          >
                            <div
                              className="
                              w-16
                              h-16
                              rounded-full
                              bg-white/90
                              flex
                              items-center
                              justify-center
                              text-2xl
                            "
                            >
                              ▶
                            </div>
                          </div>
                        )}

                    </div>

                    <div className="p-5">

                      <h2 className="font-semibold text-xl">
                        {project.title}
                      </h2>

                      <p className="text-orange-500 text-sm mt-1">
                        {project.category}
                      </p>

                      <p className="text-slate-600 mt-3">
                        {project.description}
                      </p>

                    </div>

                  </div>
                </Link>
              )
            )}

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}