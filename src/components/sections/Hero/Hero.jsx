import { company } from "@/src/data/company";
import HeroCards from "@/src/components/shared/HeroCards";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Ліва колонка */}
          <div>

            <span
              className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-orange-100
                text-orange-600
                text-sm
                font-semibold
              "
            >
              Інженерні системи • Будинок • Сад
            </span>

            <h1
              className="
                mt-6
                text-5xl
                md:text-7xl
                font-bold
                text-slate-900
                leading-tight
              "
            >
              Комплексні послуги
              для дому та подвір'я
            </h1>

            <p className="mt-6 text-xl text-slate-600">
              Електрика, сантехніка,
              опалення, вентиляція,
              кондиціонування,
              автополив та догляд
              за територією.
            </p>

            {/* Кнопки + контакти */}
            <div className="mt-10 flex flex-wrap items-center gap-6">

              <a
                href="#services"
                className="
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  transition
                "
              >
                Наші послуги
              </a>

              <a
                href={`tel:${company.phone}`}
                className="
                  border
                  border-orange-500
                  text-orange-500
                  hover:bg-orange-50
                  px-8
                  py-4
                  rounded-xl
                  transition
                "
              >
                Подзвонити
              </a>
<div className="mt-4 flex flex-wrap gap-3">

  <span
    className="
      bg-green-100
      text-green-700
      px-3
      py-1
      rounded-full
      text-sm
    "
  >
    ⚡ Відповідь протягом дня
  </span>

  <span
    className="
      bg-orange-100
      text-orange-700
      px-3
      py-1
      rounded-full
      text-sm
    "
  >
    ✅ Безкоштовна консультація
  </span>

</div>
              {/* Локація та графік */}
              <div className="flex flex-col justify-center">

                <p className="font-semibold text-slate-800">
                  📞 {company.phoneDisplay}
                </p>

                <p className="text-slate-600">
                  📍 Гайсин • Ладижин • Тростянець • Немирів • Вінницька область
                </p>

                <p className="text-slate-600">
                  🕒 {company.workTime}
                </p>

              </div>

            </div>

          </div>

          {/* ====================================== */}
          {/* МІСЦЕ ДЛЯ ГОЛОВНОГО ФОТО */}
          {/* ====================================== */}
          {/*
            КОЛИ БУДЕ ФОТО:

            public/images/hero.jpg

            Замінити цей блок на компонент Image
          */}
          {/* ====================================== */}

          <HeroCards />

        </div>

      </div>
    </section>
  );
}