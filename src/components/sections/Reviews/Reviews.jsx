import { reviews } from "@/src/data/reviews";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 bg-orange-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Відгуки клієнтів
        </h2>

        <p className="text-center text-slate-600 mb-12">
          Що говорять про нашу роботу
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="
                bg-white
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              <div className="text-orange-500 text-xl mb-4">
                ★★★★★
              </div>

              <p
                className="
                  text-slate-600
                  leading-relaxed
                  min-h-[90px]
                "
              >
                {review.review}
              </p>

              <div className="mt-6 pt-4 border-t border-orange-100">

                <div className="font-semibold">
                  {review.name}
                </div>

                <div className="text-sm text-slate-400">
                  {review.date}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}