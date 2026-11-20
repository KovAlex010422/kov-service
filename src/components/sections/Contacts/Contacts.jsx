import {
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Play,
} from "lucide-react";


import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


import { company } from "@/src/data/company";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="pt-8 pb-8 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Контакти
        </h2>

        <p className="text-center text-slate-600 mb-6">
          Зв'яжіться з нами будь-яким зручним способом
        </p>

        <div className="grid md:grid-cols-2 gap-4">

          {/* Телефон */}
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

          {/* Telegram */}
          <a
            href={company.telegram}
            target="_blank"
            rel="noopener noreferrer"
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

          {/* WhatsApp */}
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
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
                WhatsApp
              </h3>

              <p className="text-slate-600">
                Швидкий зв'язок
              </p>
            </div>
          </a>

          {/* YouTube */}
          <a
            href={company.youtube}
            target="_blank"
            rel="noopener noreferrer"
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
            < FaYoutube className="text-orange-500" />

            <div>
              <h3 className="font-semibold">
                YouTube
              </h3>

              <p className="text-slate-600">
                Переглянути наші відео
              </p>
            </div>
          </a>

          {/* Локація */}
          <div
            className="
              bg-white
              p-6
              rounded-2xl
              shadow-sm
              flex
              gap-4
              items-center
              md:col-span-2
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