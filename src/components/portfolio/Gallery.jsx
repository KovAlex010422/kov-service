"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery({
  images,
  title,
}) {
  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {images.map((image, index) => (
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
              alt={title}
              fill
              priority={index === 0}
              sizes="50vw"
              className="
                object-cover
                hover:scale-105
                transition
              "
            />
          </div>
        ))}
      </div>

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
              src={images[selectedIndex]}
              alt={title}
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
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}