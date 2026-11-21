"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { company } from "@/src/data/company";
import { MessengerLinks } from "@/src/components/shared/MessengerLinks";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

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
    name: "Придбати рослини у партнерів",
    href: "/shop",
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

        {/* Десктоп кнопка та месенджери */}
        <div className="hidden md:flex items-center gap-3">
          <MessengerLinks variant="header" />
          <a
            href={`tel:${company.phone}`}
            className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              px-3
              py-2
              rounded-xl
              transition
              text-sm
            "
          >
            Зателефонувати
          </a>
        </div>

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

            <SheetContent
              side="right"
              className="w-[85vw] sm:w-[420px] p-0 flex flex-col h-full"
            >
              {/* Шапка мобільного меню */}
              <div className="px-5 py-4 border-b flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-9
                      h-9
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
                    <div className="font-bold text-base text-slate-900">
                      KOV Service
                    </div>

                    <div className="text-xs text-slate-500">
                      Дім • Сад • Сервіс
                    </div>
                  </div>
                </div>
              </div>

              {/* Прокручувана середина (Меню + Контакти) */}
              <div className="flex-1 overflow-y-auto px-5 py-3">
                <nav className="flex flex-col gap-2.5">
                  {menuItems.map((item) => (
                    <SheetClose
                      key={item.href}
                      asChild
                    >
                      <Link
                        href={item.href}
                        className="
                          flex
                          items-center
                          justify-center
                          px-4
                          py-2.5
                          text-sm
                          font-semibold
                          rounded-xl
                          border
                          border-slate-200
                          bg-slate-50
                          hover:bg-orange-50
                          hover:border-orange-300
                          hover:text-orange-500
                          transition
                          text-center
                        "
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Швидкий зв’язок */}
                <div className="mt-5">
                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-wider
                      text-slate-400
                      mb-2
                    "
                  >
                    Швидкий зв’язок
                  </p>

                  <div className="flex flex-col gap-2">
                    <a
                      href={company.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-3
                        px-3.5
                        py-2.5
                        rounded-xl
                        border
                        border-slate-200
                        hover:bg-slate-50
                        text-sm
                      "
                    >
                      <FaTelegramPlane size={20} color="#229ED9" />
                      <span>Telegram</span>
                    </a>

                    <a
                      href={company.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-3
                        px-3.5
                        py-2.5
                        rounded-xl
                        border
                        border-slate-200
                        hover:bg-slate-50
                        text-sm
                      "
                    >
                      <FaWhatsapp size={20} color="#25D366" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={company.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-3
                        px-3.5
                        py-2.5
                        rounded-xl
                        border
                        border-slate-200
                        hover:bg-slate-50
                        text-sm
                      "
                    >
                      <FaYoutube size={20} color="#FF0000" />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Низ (Телефон і кнопка) */}
              <div className="border-t p-4 bg-white flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-bold text-sm text-slate-900">
                      {company.phoneDisplay}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {company.location}
                    </div>
                  </div>

                  <SheetClose asChild>
                    <a
                      href={`tel:${company.phone}`}
                      className="
                        bg-orange-500
                        hover:bg-orange-600
                        text-white
                        font-medium
                        text-xs
                        px-4
                        py-2.5
                        rounded-xl
                        transition
                        whitespace-nowrap
                      "
                    >
                      📞 Зателефонувати
                    </a>
                  </SheetClose>
                </div>
              </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}