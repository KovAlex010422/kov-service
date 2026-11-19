import { company } from "@/src/data/company";
import { MessengerLinks } from "@/src/components/shared/MessengerLinks";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex flex-col gap-1 text-center md:text-left">
                    <div>
                        © 2026 {company.name}
                    </div>
                    <div className="text-xs text-slate-400">
                        Електрика • Сантехніка • Опалення • Автополив
                    </div>
                </div>

                {/* Кнопки месенджерів у футері */}
                <div className="flex items-center">
                    <MessengerLinks variant="footer" />
                </div>

            </div>
        </footer>
    );
}