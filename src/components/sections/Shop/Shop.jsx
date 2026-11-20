import React from "react";
import Link from "next/link";
import { FaFacebook, FaPhoneAlt, FaMapMarkerAlt, FaTruck, FaArrowLeft } from "react-icons/fa";

export default function Shop() {
  return (
    <section id="shop" className="py-6 md:py-10 px-6 bg-orange-50/40 border-t border-orange-100 min-h-[70vh]">
      <div className="max-w-5xl mx-auto">
        
        {/* Кнопка повернення назад */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-500 font-medium transition bg-white px-4 py-2 rounded-xl border border-orange-100 shadow-sm"
          >
            <FaArrowLeft size={14} />
            <span>На головну</span>
          </Link>
        </div>

        {/* Заголовок секції */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Розсадник та продаж
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Придбати рослини
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Обирайте декоративні та хвойні рослини на місці у Гайсині або замовляйте зручну доставку по всій Україні.
          </p>
        </div>

        {/* Сітка карток */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Адреса */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-orange-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                Адреса місця продажу
              </h3>
              <p className="text-slate-700 font-medium">
                вул. Соборна, 19
              </p>
              <p className="text-slate-500 text-sm">
                м. Гайсин, Вінницька область
              </p>
            </div>
          </div>

          {/* Доставка */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-orange-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0 text-xl">
              <FaTruck />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                Доставка по Україні
              </h3>
              <p className="text-slate-700">
                Відправка поштовими перевізниками
              </p>
              <p className="text-slate-500 text-sm">
                Надійне пакування для безпечного транспортування
              </p>
            </div>
          </div>

          {/* Телефони */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-orange-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0 text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                Контактні телефони
              </h3>
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+380964309150"
                  className="text-slate-800 font-semibold hover:text-orange-500 transition"
                >
                  +38 (096) 430-91-50
                </a>
                <a
                  href="tel:+380677662990"
                  className="text-slate-800 font-semibold hover:text-orange-500 transition"
                >
                  +38 (067) 766-29-90
                </a>
              </div>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-orange-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-2xl">
              <FaFacebook />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                Асортимент у Facebook
              </h3>
              <a
                href="https://www.facebook.com/svitlana.koval.cuk.321277/about?locale=uk_UA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline inline-block"
              >
                Переглянути сторінку →
              </a>
              <p className="text-slate-500 text-sm mt-1">
                Актуальні фото рослин, ціни та наявність
              </p>
            </div>
          </div>

        </div>

        {/* Кнопка дії */}
        <div className="text-center">
          <a
            href="tel:+380964309150"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition shadow-sm"
          >
            <FaPhoneAlt size={16} />
            Уточнити наявність рослин
          </a>
        </div>

      </div>
    </section>
  );
}