import { company } from "@/src/data/company"; export default function Footer() {


    return (
        <footer className="bg-slate-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <div>
                    © 2026 {company.name}
                </div>


                <div className="text-slate-400">
                    Електрика • Сантехніка • Опалення • Автополив
                </div>

            </div>
        </footer>
    );
}