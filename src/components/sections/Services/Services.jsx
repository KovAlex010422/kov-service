"use client";

import { useState } from "react";

import {
    Zap,
    Wrench,
    Flame,
    Snowflake,
    Fan,
    Droplets,
    Trees,
    Hammer,
    ChevronDown,
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
    // Зберігаємо ID відкритої картки (null, якщо нічого не відкрито)
    const [openId, setOpenId] = useState(null);

    const toggleService = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Наші послуги
                </h2>

                <p className="text-center text-slate-600 mb-12">
                    Оберіть категорію та перегляньте перелік робіт (натисніть на картку)
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => {
                        const Icon = icons[service.icon];
                        const isOpen = openId === service.id;

                        return (
                            <div key={service.id} className="relative">
                                <button
                                    onClick={() => toggleService(service.id)}
                                    className={`
                                        w-full
                                        p-5
                                        rounded-2xl
                                        border
                                        transition-all
                                        duration-300
                                        text-left
                                        flex
                                        items-center
                                        justify-between
                                        ${isOpen
                                            ? "bg-orange-50 border-orange-400 shadow-md"
                                            : "bg-white border-orange-200 hover:bg-orange-50 hover:border-orange-400 hover:shadow-lg"
                                        }
                                    `}
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center gap-3">
                                        {Icon && (
                                            <Icon
                                                size={28}
                                                className="text-orange-500 flex-shrink-0"
                                            />
                                        )}
                                        <h3 className="font-semibold text-lg">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Стрілочка-індикатор, яка показує стан та сигналізує про клік */}
                                    <ChevronDown
                                        size={20}
                                        className={`text-orange-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Випадаючий список на ПК (через hover) та мобільних (через клік) */}
                                <div
                                    className={`
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
                                        transition-all
                                        duration-200
                                        ${isOpen
                                            ? "opacity-100 visible translate-y-0"
                                            : "opacity-0 invisible translate-y-2 pointer-events-none"
                                        }
                                    `}
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