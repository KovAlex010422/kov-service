import Image from "next/image";
import { portfolio } from "@/src/data/portfolio";

export default function Portfolio() {
    return (
        <section
            id="portfolio"
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-4">
                    Наші роботи
                </h2>

                <p className="text-center text-slate-600 mb-12">
                    Приклади виконаних проєктів
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {portfolio.map((item) => (
                        <div
                            key={item.id}
                            className="
                rounded-2xl
                overflow-hidden
                border
                border-orange-100
                shadow-sm
                hover:shadow-lg
                transition
              "
                        >
                            {/* ===================================== */}
                            {/* Фото або заглушка */}
                            {/* ===================================== */}
                            <div className="relative h-64">

                                {item.image ? (
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div
                                        className="
                      h-full
                      flex
                      flex-col
                      items-center
                      justify-center
                      bg-orange-50
                      border-2
                      border-dashed
                      border-orange-200
                    "
                                    >
                                        <div className="text-center">
                                            <div className="text-6xl mb-4">
                                                📷
                                            </div>

                                            <div className="font-semibold">
                                                Фото роботи
                                            </div>

                                            <div className="text-sm text-slate-500 mt-2">
                                                Додайте фото в public/portfolio
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>

                            {/* Назва роботи */}
                            <div className="p-4">

                                <h3 className="font-semibold text-lg">
                                    {item.title}
                                </h3>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}