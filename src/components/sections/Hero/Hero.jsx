import { company } from "@/src/data/company";
import HeroCards from "@/src/components/shared/HeroCards";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import HeroProjectSlider from "../HeroProjectSlider/HeroProjectSlider";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-8 items-center">
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

            <p
              className="
                mt-6
                text-3xl
                md:text-5xl
                font-bold
                text-slate-900
                leading-tight
              "
            >
              Комплексні послуги
              для дому та подвір'я
            </p>

            <p className="mt-6 text-xl text-slate-600">
              Електрика, сантехніка,
              опалення, вентиляція,
              автополив та догляд
              за територією.
            </p>

            {/* Кнопки + контакти */}
            <div className="mt-4 flex flex-wrap items-center gap-6">

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
                  ✅ Безкоштовна консультація по телефону
                </span>

              </div>
              {/* Локація та графік */}
              <div className="flex flex-col justify-center">

                <p className="font-semibold text-slate-800">
                  📞 {company.phoneDisplay}
                </p>

                <p className="text-slate-600">
                  📍 {company.location}
                </p>

                <p className="text-slate-600">
                  🕒 {company.workTime}
                </p>

              </div>

            </div>

          </div>

          <HeroProjectSlider />

        </div>

      </div>
    </section>
  );
}