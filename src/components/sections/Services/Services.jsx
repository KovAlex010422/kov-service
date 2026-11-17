"use client";

import Link from "next/link";

import {
  Zap,
  Wrench,
  Flame,
//   Snowflake,
  Fan,
  Droplets,
  Trees,
  Hammer,
} from "lucide-react";

import { services } from "@/src/data/services";

const icons = {
  electric: Zap,
  plumbing: Wrench,
  heating: Flame,
//   conditioning: Snowflake,
  ventilation: Fan,
  landscape: Trees,
  renovation: Hammer,
  droplets: Droplets,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Наші послуги
        </h2>

        <p className="text-center text-slate-600 mb-12">
          Оберіть категорію послуг
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="
                  group
                  block
                  p-6
                  rounded-2xl
                  border
                  border-orange-200
                  bg-white
                  hover:bg-orange-50
                  hover:border-orange-400
                  hover:shadow-lg
                  transition-all
                "
              >
                <div className="flex items-center gap-3 mb-4">

                  {Icon && (
                    <Icon
                      size={28}
                      className="
                        text-orange-500
                        group-hover:scale-110
                        transition
                      "
                    />
                  )}

                  <h3 className="font-semibold text-lg">
                    {service.title}
                  </h3>

                </div>

                <p className="text-sm text-slate-600 line-clamp-3">
                  {service.items
                    .slice(0, 3)
                    .join(", ")}
                </p>

                <div
                  className="
                    mt-4
                    text-orange-500
                    font-medium
                  "
                >
                  Детальніше →
                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}