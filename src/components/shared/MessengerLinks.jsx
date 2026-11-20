import {
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import { company } from "@/src/data/company";

export function MessengerLinks({
  variant = "header",
}) {
  const isHeader =
    variant === "header";

  const buttonClass = isHeader
    ? `
      w-10
      h-10
      rounded-full
      border
      border-slate-200
      bg-white
      flex
      items-center
      justify-center
      hover:shadow-md
      transition
    `
    : `
      inline-flex
      items-center
      gap-2
      px-3.5
      py-2
      rounded-full
      border
      border-slate-200
      text-sm
      text-slate-700
      hover:shadow-md
      transition
    `;

  return (
    <div className="flex items-center gap-2">
      {/* Telegram */}
      <a
        href={company.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        title="Telegram"
        className={buttonClass}
      >
        <FaTelegramPlane
          className="text-[#229ED9]"
          size={18}
        />

        {!isHeader && (
          <span>Telegram</span>
        )}
      </a>

      {/* WhatsApp */}
      <a
        href={company.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
        className={buttonClass}
      >
        <FaWhatsapp
          className="text-[#25D366]"
          size={18}
        />

        {!isHeader && (
          <span>WhatsApp</span>
        )}
      </a>

      {/* YouTube */}
      <a
        href={company.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        title="YouTube"
        className={buttonClass}
      >
        <FaYoutube
          className="text-[#FF0000]"
          size={18}
        />

        {!isHeader && (
          <span>YouTube</span>
        )}
      </a>
    </div>
  );
}