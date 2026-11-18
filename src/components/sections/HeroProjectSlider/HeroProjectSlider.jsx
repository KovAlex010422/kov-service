"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "@/src/data/projects";

export default function HeroProjectSlider() {
    const sortedProjects = useMemo(() => {
        const greenCategories = [
            "Ландшафтні роботи",
            "Догляд за газоном",
            "Стрижка та формування рослин",
        ];

        return [
            ...projects.filter((project) =>
                greenCategories.includes(project.category)
            ),

            ...projects.filter(
                (project) =>
                    !greenCategories.includes(
                        project.category
                    )
            ),
        ];
    }, []);

    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] =
        useState(true);

    const nextSlide = () => {
        setIsVisible(false);

        setTimeout(() => {
            setCurrent(
                (prev) =>
                    (prev + 1) %
                    sortedProjects.length
            );

            setIsVisible(true);
        }, 350);
    };

    const prevSlide = () => {
        setIsVisible(false);

        setTimeout(() => {
            setCurrent(
                (prev) =>
                    prev === 0
                        ? sortedProjects.length - 1
                        : prev - 1
            );

            setIsVisible(true);
        }, 350);
    };

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrent(
                    (prev) =>
                        (prev + 1) %
                        sortedProjects.length
                );

                setIsVisible(true);
            }, 350);
        }, 4000);

        return () =>
            clearInterval(timer);
    }, [
        isPaused,
        sortedProjects.length,
    ]);

    const project =
        sortedProjects[current];

    return (
        <div
            className="relative"
            onMouseEnter={() =>
                setIsPaused(true)
            }
            onMouseLeave={() =>
                setIsPaused(false)
            }
            onTouchStart={() =>
                setIsPaused(true)
            }
            onTouchEnd={() =>
                setIsPaused(false)
            }
        >

            <div
                className="
          overflow-hidden
          rounded-3xl
          border
          border-orange-100
          bg-white
          shadow-lg
        "
            >
                <Link
                    href={`/portfolio/${project.id}`}
                >
                    <div
                        className={`
    relative
    h-[500px]
    transition-opacity
    duration-500

    ${isVisible
                                ? "opacity-100"
                                : "opacity-0"
                            }
  `}
                    >

                        <Image
                            src={project.cover}
                            alt={project.title}
                            fill
                            priority
                            sizes="50vw"
                            className="
                object-cover
                transition-all
                duration-700
              "
                        />

                        {project.videos?.length >
                            0 && (
                                <div
                                    className="
                  absolute
                  top-4
                  right-4
                  bg-black/70
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                "
                                >
                                    ▶ Відео
                                </div>
                            )}

                        <div
                            className="
                absolute
                inset-x-0
                bottom-0
                p-6
                bg-gradient-to-t
                from-black/80
                to-transparent
                text-white
              "
                        >
                            <p
                                className="
                  text-sm
                  text-orange-300
                  mb-2
                "
                            >
                                {project.category}
                            </p>

                            <h3
                                className="
                  text-2xl
                  font-bold
                "
                            >
                                {project.title}
                            </h3>
                        </div>

                    </div>
                </Link>
            </div>

            {/* стрілки */}

            <button
                onClick={prevSlide}
                className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2

          w-12
          h-12

          rounded-full
          bg-white/90

          shadow-lg

          flex
          items-center
          justify-center

          hover:bg-white
          transition
        "
            >
                <ChevronLeft size={20} />
            </button>

            <button
                onClick={nextSlide}
                className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2

          w-12
          h-12

          rounded-full
          bg-white/90

          shadow-lg

          flex
          items-center
          justify-center

          hover:bg-white
          transition
        "
            >
                <ChevronRight size={20} />
            </button>

            {/* індикатори */}

            <div
                className="
          flex
          justify-center
          gap-2
          mt-5
        "
            >
                {sortedProjects.map(
                    (_, index) => (
                        <button
                            key={index}
                            onClick={() =>
                                setCurrent(index)
                            }
                            className={`
                h-2 rounded-full transition-all

                ${current === index
                                    ? "w-8 bg-orange-500"
                                    : "w-2 bg-orange-300"
                                }
              `}
                        />
                    )
                )}
            </div>

            <div
                className="
          text-center
          mt-6
        "
            >
                <Link
                    href="/portfolio"
                    className="
            inline-block
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-6
            py-3
            rounded-xl
            transition
          "
                >
                    Переглянути всі роботи
                </Link>
            </div>

        </div>
    );
}