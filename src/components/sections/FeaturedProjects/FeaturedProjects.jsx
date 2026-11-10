import Link from "next/link";
import Image from "next/image";
import { projects } from "@/src/data/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Recent Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {featured.map((project) => (
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
                  transition
                "
              >
                <div className="relative h-64">

                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover"
                  />

                </div>

                <div className="p-4">

                  <h3 className="font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {project.category}
                  </p>

                </div>

              </div>
            </Link>
          ))}

        </div>

        <div className="text-center mt-12">

          <Link
            href="/portfolio"
            className="
              bg-orange-500
              text-white
              px-8
              py-4
              rounded-xl
            "
          >
            View Full Portfolio
          </Link>

        </div>

      </div>
    </section>
  );
}