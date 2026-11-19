import { Send, MessageCircle } from "lucide-react";
import { company } from "@/src/data/company";

export function MessengerLinks({ variant = "header" }) {
  const isHeader = variant === "header";

  return (
    <div className="flex items-center gap-2">
      {/* Telegram */}
      <a
        href={company.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написати в Telegram"
        title="Написати в Telegram"
        className={
          isHeader
            ? "w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:border-orange-500 hover:text-orange-500 transition"
            : "inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-orange-500 hover:text-orange-500 transition"
        }
      >
        <Send className="w-4 h-4 text-orange-500" />
        {!isHeader && <span>Telegram</span>}
      </a>

      {/* Viber */}
      <a
        href={company.viber}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написати у Viber"
        title="Написати у Viber"
        className={
          isHeader
            ? "w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:border-orange-500 hover:text-orange-500 transition"
            : "inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-orange-500 hover:text-orange-500 transition"
        }
      >
        <MessageCircle className="w-4 h-4 text-orange-500" />
        {!isHeader && <span>Viber</span>}
      </a>
    </div>
  );
}