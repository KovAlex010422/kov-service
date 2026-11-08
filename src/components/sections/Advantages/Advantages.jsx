import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Wrench,
} from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Гарантія",
    description:
      "Відповідальність за виконані роботи.",
  },
  {
    icon: Clock3,
    title: "Оперативність",
    description:
      "Швидкий виїзд та виконання завдань.",
  },
  {
    icon: BadgeCheck,
    title: "Якість",
    description:
      "Досвід та перевірені рішення.",
  },
  {
    icon: Wrench,
    title: "Комплексний сервіс",
    description:
      "Багато послуг в одному місці.",
  },
];

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="py-24 bg-orange-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Чому обирають нас
        </h2>

        <p className="text-center text-slate-600 mb-12">
          Професійний підхід до кожного замовлення
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  bg-white
                  p-6
                  rounded-2xl
                  shadow-sm
                  hover:shadow-lg
                  transition
                "
              >
                <Icon
                  size={40}
                  className="text-orange-500 mb-4"
                />

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}