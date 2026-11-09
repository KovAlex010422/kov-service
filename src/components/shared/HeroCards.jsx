const cards = [
  {
    icon: "⚡",
    title: "Електрика",
  },
  {
    icon: "🚿",
    title: "Сантехніка",
  },
  {
    icon: "💧",
    title: "Автополив",
  },
  {
    icon: "🌳",
    title: "Догляд за садом",
  },
];

export default function HeroCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            h-52
            bg-white
            rounded-3xl
            border
            border-orange-100
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
            duration-300
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <div className="text-5xl">
            {card.icon}
          </div>

          <div className="mt-4 font-semibold text-slate-800">
            {card.title}
          </div>
        </div>
      ))}
    </div>
  );
}