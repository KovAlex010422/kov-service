"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { company } from "@/src/data/company";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  {
    name: "Послуги",
    href: "/#services",
  },
  {
    name: "Замовити консультацію",
    href: "/#request",
  },
  {
    name: "Наші роботи",
    href: "/portfolio",
  },
  {
    name: "Контакти",
    href: "/#contacts",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-white/90
        backdrop-blur-md
        border-b
        border-orange-100
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Логотип */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-orange-500
              text-white
              flex
              items-center
              justify-center
              font-bold
            "
          >
            K
          </div>

          <div>
            <div className="font-bold text-slate-900">
              KOV Service
            </div>

            <div className="text-xs text-slate-500">
              Дім • Сад • Сервіс
            </div>
          </div>
        </Link>

        {/* Десктопне меню */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
      relative
      text-slate-700
      font-medium
      transition-colors
      duration-300
      hover:text-orange-500

      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-orange-500
      after:transition-all
      after:duration-300

      hover:after:w-full
    "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Десктоп кнопка */}
        <a
          href={`tel:${company.phone}`}
          className="
            hidden
            md:flex
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-4
            py-2
            rounded-xl
            transition
          "
        >
          Зателефонувати
        </a>

        {/* Мобільне меню */}
        <div className="md:hidden">
          <Sheet
            open={open}
            onOpenChange={setOpen}
          >
            <SheetTrigger
              className="
                p-2
                rounded-lg
                hover:bg-orange-50
                transition
              "
            >
              <Menu size={28} />
            </SheetTrigger>

            <SheetContent side="right">
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-8">
                  Меню
                </h2>

                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <SheetClose
                      key={item.href}
                    >
                      <Link
                        href={item.href}
                        className="
    block
    py-3
    border-b
    border-slate-100
    hover:text-orange-500
  "
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}

                  <SheetClose>
                    <a
                      href={`tel:${company.phone}`}
                      className="
                        mt-4
                        block
                        bg-orange-500
                        hover:bg-orange-600
                        text-white
                        px-4
                        py-3
                        rounded-xl
                        text-center
                        transition
                      "
                    >
                      Зателефонувати
                    </a>
                  </SheetClose>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}