"use client";

import { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Link from "next/link";
import Image from "next/image";

import { projects } from "@/src/data/projects";

export default function FeaturedProjects() {
  const [isPaused, setIsPaused] = useState(false);

  const sortedProjects = useMemo(() => {
    const greenCategories = [
      "Озеленення",
      "Ландшафтні роботи",
      "Догляд за газоном",
      "Стрижка та формування рослин",
    ];

    return [
      ...projects.filter(
        (project) => project.category === "Озеленення"
      ),
      ...projects.filter(
        (project) =>
          project.category !== "Озеленення" &&
          greenCategories.includes(project.category)
      ),
      ...projects.filter(
        (project) =>
          !greenCategories.includes(project.category)
      ),
    ];
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 30,
  });

  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 1500);

    return () => clearInterval(autoplay);
  }, [emblaApi, isPaused]);

  return (
    <section className="pt-8 pb-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Виконані проєкти
        </h2>

        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="-ml-4 flex">
            {sortedProjects.map((project) => (
              <div
                key={project.id}
                className="
                  min-w-full
                  md:min-w-1/2
                  lg:min-w-1/3
                  pl-4
                "
              >
                <Link
                  href={`/portfolio/${project.id}`}
                  className="block h-full group"
                >
                  <div
                    className="
                      h-full
                      flex
                      flex-col
                      overflow-hidden
                      rounded-2xl
                      border
                      border-orange-100
                      bg-white
                      hover:shadow-xl
                      hover:-translate-y-1
                      transition-all
                      duration-500
                    "
                  >
                    <div className="relative h-72 shrink-0">
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        sizes="
                          (max-width:768px) 100vw,
                          (max-width:1024px) 50vw,
                          33vw
                        "
                        className="object-cover"
                      />

                      {project.videos?.length > 0 && (
                        <div
                          className="
                            absolute
                            top-3
                            right-3
                            bg-black/70
                            text-white
                            px-3
                            py-1
                            rounded-full
                            text-sm
                          "
                        >
                          ▶ Відео
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <h3
                        className="
                          font-semibold
                          text-lg
                          mb-2
                        "
                      >
                        {project.title}
                      </h3>

                      <p
                        className="
                          text-orange-500
                          text-sm
                          mb-2
                        "
                      >
                        {project.category}
                      </p>

                      <p
                        className="
                          text-slate-600
                          text-sm
                          line-clamp-3
                        "
                      >
                        {project.description}
                      </p>

                      <span
                        className="
                          mt-1
                          inline-block
                          text-sm
                          font-medium
                          text-orange-500
                          group-hover:text-orange-600
                          group-hover:underline
                          transition
                        "
                      >
                        Читати далі →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="
              inline-block
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-8
              py-4
              rounded-xl
              transition
            "
          >
            Переглянути всі виконані роботи
          </Link>
        </div>
      </div>
    </section>
  );
}