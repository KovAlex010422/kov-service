import {
    Zap,
    Wrench,
    Flame,
    Snowflake,
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
    conditioning: Snowflake,
    ventilation: Fan,
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
                    Оберіть категорію та перегляньте перелік робіт
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {services.map((service) => {
                        const Icon = icons[service.icon];

                        return (
                            <div
                                key={service.id}
                                className="relative group"
                            >
                                <button
                                    className="
    w-full
    p-5
    rounded-2xl
    border
    border-orange-200
    bg-white
    hover:bg-orange-50
    hover:border-orange-400
    hover:shadow-lg
    transition-all
    duration-300
    text-left
  "
                                >
                                    <div className="flex items-center gap-3">

                                        {Icon && (
                                            <Icon
                                                size={28}
                                                className="text-orange-500"
                                            />
                                        )}

                                        <h3 className="font-semibold text-lg">
                                            {service.title}
                                        </h3>

                                    </div>
                                </button>

                                <div
                                    className="
                    absolute
                    left-0
                    top-full
                    mt-2
                    w-full
                    bg-white
                    rounded-2xl
                    border
                    border-orange-100
                    shadow-xl
                    z-50

                    opacity-0
                    invisible
                    translate-y-2

                    transition-all
                    duration-200

                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:translate-y-0
                  "
                                >
                                    <ul className="p-5 space-y-3">

                                        {service.items.map((item) => (
                                            <li
                                                key={item}
                                                className="
                          text-sm
                          text-slate-700
                          border-b
                          border-orange-50
                          pb-2
                        "
                                            >
                                                ✓ {item}
                                            </li>
                                        ))}

                                    </ul>
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}