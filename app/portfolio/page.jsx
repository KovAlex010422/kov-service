import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/sections/Footer/Footer";

import Link from "next/link";
import Image from "next/image";

import { projects } from "@/src/data/projects";

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <main className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center mb-4">
            Portfolio
          </h1>

          <p className="text-center text-slate-600 mb-12">
            Completed projects and examples of our work
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
              >
                <div
                  className="
        overflow-hidden
        rounded-2xl
        border
        border-orange-100
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
                >
                  <div className="relative h-72">

                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />

                  </div>

                  <div className="p-5">

                    <h2 className="font-semibold text-xl">
                      {project.title}
                    </h2>

                    <p className="text-orange-500 text-sm mt-1">
                      {project.category}
                    </p>

                    <p className="text-slate-600 mt-3">
                      {project.description}
                    </p>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}