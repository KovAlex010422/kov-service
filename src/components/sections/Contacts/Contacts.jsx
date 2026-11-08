import {
  Phone,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { company } from "@/src/data/company";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="py-24 bg-orange-50"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Контакти
        </h2>

        <p className="text-center text-slate-600 mb-12">
          Зв'яжіться з нами будь-яким зручним способом
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <a
            href={`tel:${company.phone}`}
            className="
              bg-white
              p-6
              rounded-2xl
              shadow-sm
              hover:shadow-lg
              transition
              flex
              gap-4
              items-center
            "
          >
            <Phone className="text-orange-500" />

            <div>
              <h3 className="font-semibold">
                Телефон
              </h3>

              <p className="text-slate-600">
                {company.phoneDisplay}
              </p>
            </div>
          </a>

          <a
            href={company.telegram}
            target="_blank"
            className="
              bg-white
              p-6
              rounded-2xl
              shadow-sm
              hover:shadow-lg
              transition
              flex
              gap-4
              items-center
            "
          >
            <Send className="text-orange-500" />

            <div>
              <h3 className="font-semibold">
                Telegram
              </h3>

              <p className="text-slate-600">
                Написати повідомлення
              </p>
            </div>
          </a>

          <a
            href={company.viber}
            className="
              bg-white
              p-6
              rounded-2xl
              shadow-sm
              hover:shadow-lg
              transition
              flex
              gap-4
              items-center
            "
          >
            <MessageCircle className="text-orange-500" />

            <div>
              <h3 className="font-semibold">
                Viber
              </h3>

              <p className="text-slate-600">
                Швидкий зв'язок
              </p>
            </div>
          </a>

          <div
            className="
              bg-white
              p-6
              rounded-2xl
              shadow-sm
              flex
              gap-4
              items-center
            "
          >
            <MapPin className="text-orange-500" />

            <div>
              <h3 className="font-semibold">
                Локація
              </h3>

              <p className="text-slate-600">
                {company.location}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}