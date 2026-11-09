export default function ServiceArea() {
  const cities = [
    "Гайсин",
    "Ладижин",
    "Тростянець",
    "Немирів",
    "Бершадь",
    "Теплик",
    "Вінниця",
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-4">
          Працюємо по Вінницькій області
        </h2>

        <p className="text-center text-slate-600 mb-8">
          Виїзд на об'єкти та консультації
        </p>

        <div className="flex flex-wrap justify-center gap-3">

          {cities.map((city) => (
            <span
              key={city}
              className="
                px-4
                py-2
                bg-white
                rounded-full
                shadow-sm
                border
                border-orange-100
              "
            >
              {city}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}