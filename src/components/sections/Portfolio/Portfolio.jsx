"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/src/data/portfolio";

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const sortedPortfolio = useMemo(() => {
    const greenCategories = [
      "Озеленення",
      "Ландшафтні роботи",
      "Догляд за газоном",
      "Стрижка та формування рослин",
    ];

    return [
      ...portfolio.filter((item) => item.category === "Озеленення"),
      ...portfolio.filter(
        (item) =>
          item.category !== "Озеленення" &&
          greenCategories.includes(item.category)
      ),
      ...portfolio.filter(
        (item) => !greenCategories.includes(item.category)
      ),
    ];
  }, []);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === sortedPortfolio.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? sortedPortfolio.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="portfolio"
      className="pt-8 pb-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Наші роботи
        </h2>

        <p className="text-center text-slate-600 mb-12">
          Приклади виконаних проєктів
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPortfolio.map((item, index) => (
            <div
              key={item.id}
              className="
                flex
                flex-col
                rounded-2xl
                overflow-hidden
                border
                border-orange-100
                shadow-sm
                hover:shadow-lg
                transition
              "
            >
              <div className="relative h-64 shrink-0">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="
                      object-cover
                      cursor-pointer
                      transition-transform
                      duration-300
                      hover:scale-105
                    "
                    onClick={() => setSelectedIndex(index)}
                  />
                ) : (
                  <div
                    className="
                      h-full
                      flex
                      flex-col
                      items-center
                      justify-center
                      bg-orange-50
                      border-2
                      border-dashed
                      border-orange-200
                    "
                  >
                    <div className="text-6xl mb-4">
                      {item.icon}
                    </div>

                    <div className="font-semibold">
                      Фото роботи
                    </div>

                    <div className="text-sm text-slate-500 mt-2">
                      Додайте фото в public/portfolio
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-1">
                  {item.title}
                </h3>

                {item.category && (
                  <p className="text-orange-500 text-sm mb-2">
                    {item.category}
                  </p>
                )}

                {item.description && (
                  <p className="text-slate-600 text-sm line-clamp-3">
                    {item.description}
                  </p>
                )}

                <Link
                  href={`/portfolio/${item.id}`}
                  className="
                    mt-1
                    inline-block
                    text-sm
                    font-medium
                    text-orange-500
                    hover:text-orange-600
                    hover:underline
                    transition
                  "
                >
                  Читати далі →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="
            fixed
            inset-0
            z-999
            bg-black/90
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
              max-w-6xl
              h-[85vh]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={sortedPortfolio[selectedIndex].image}
              alt={sortedPortfolio[selectedIndex].title}
              fill
              sizes="100vw"
              className="object-contain"
            />

            {/* Закрити */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="
                absolute
                top-4
                right-4
                w-10
                h-10
                rounded-full
                bg-white
                text-black
                font-bold
                shadow-lg
              "
            >
              ✕
            </button>

            {/* Попереднє */}
            <button
              onClick={prevImage}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                bg-white
                text-black
                w-12
                h-12
                rounded-full
                shadow-lg
                text-xl
                font-bold
              "
            >
              ←
            </button>

            {/* Наступне */}
            <button
              onClick={nextImage}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                bg-white
                text-black
                w-12
                h-12
                rounded-full
                shadow-lg
                text-xl
                font-bold
              "
            >
              →
            </button>

            {/* Лічильник */}
            <div
              className="
                absolute
                top-4
                left-4
                bg-black/70
                text-white
                px-3
                py-2
                rounded-xl
              "
            >
              {selectedIndex + 1} / {sortedPortfolio.length}
            </div>

            {/* Назва фото */}
            <div
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                bg-black/70
                text-white
                px-4
                py-2
                rounded-xl
              "
            >
              {sortedPortfolio[selectedIndex].title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
