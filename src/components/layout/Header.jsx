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
              className="w-[85vw] sm:w-[420px] p-0"
            >
              <div className="h-full flex flex-col">

                {/* Верх */}
                <div className="px-6 py-6 border-b">

                  <div className="flex items-center gap-3">

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
                      <div className="font-bold text-lg">
                        KOV Service
                      </div>

                      <div className="text-sm text-slate-500">
                        Дім • Сад • Сервіс
                      </div>
                    </div>

                  </div>

                </div>

                {/* Меню */}
                <div className="flex-1 px-6 py-4">

                  <nav className="flex flex-col gap-3">

                    {menuItems.map((item) => (
                      <SheetClose
                        key={item.href}
                        asChild
                      >
                        <Link
                          href={item.href}
                          className="
  py-4
  px-3

  text-lg
  font-medium

  rounded-xl

  hover:bg-orange-50
  hover:text-orange-500

  transition
"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}

                  </nav>

                  {/* Контакти */}
                  <div className="mt-8">

                    <p
                      className="
            text-xs
            uppercase
            tracking-wider
            text-slate-400
            mb-3
          "
                    >
                      Швидкий зв’язок
                    </p>

                    <div className="flex flex-col gap-3">

                      <a
                        href={company.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              flex
              items-center
              gap-3

              px-4
              py-3

              rounded-xl

              border
              border-slate-200

              hover:bg-slate-50
            "
                      >
                        <FaTelegramPlane
                          size={22}
                          color="#229ED9"
                        />

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

              px-4
              py-3

              rounded-xl

              border
              border-slate-200

              hover:bg-slate-50
            "
                      >
                        <FaWhatsapp
                          size={22}
                          color="#25D366"
                        />

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

              px-4
              py-3

              rounded-xl

              border
              border-slate-200

              hover:bg-slate-50
            "
                      >
                        <FaYoutube
                          size={22}
                          color="#FF0000"
                        />

                        <span>YouTube</span>
                      </a>

                    </div>

                  </div>

                </div>

                {/* Низ */}
                <div className="border-t p-6">

                  <div className="mb-5">

                    <div className="font-semibold text-lg">
                      {company.phoneDisplay}
                    </div>

                    <div className="text-slate-500 text-sm mt-1">
                      {company.location}
                    </div>

                  </div>

                  <div className="flex justify-center">
                    <SheetClose asChild>
                      <a
                        href={`tel:${company.phone}`}
                        className="
        bg-orange-500
        hover:bg-orange-600
        text-white
        font-medium
        px-5
        py-3
        rounded-xl
        transition
      "
                      >
                        📞 Зателефонувати
                      </a>
                    </SheetClose>
                  </div>

                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}