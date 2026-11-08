import { company } from "@/src/data/company";

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

              {/* Локація та графік */}
              <div className="flex flex-col justify-center">
                <p className="text-slate-600">
                  📍 {company.location}
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

          <div
            className="
              h-[450px]
              rounded-3xl
              border-2
              border-dashed
              border-orange-300
              bg-orange-50
              flex
              items-center
              justify-center
              text-center
              p-8
            "
          >
            <div>

              <div className="text-6xl mb-4">
                🏠
              </div>

              <h3 className="text-2xl font-semibold text-slate-800">
                Головне фото сайту
              </h3>

              <p className="mt-3 text-slate-500">
                Тут буде фото будинку,
                автополиву, саду або
                виконаних робіт.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}