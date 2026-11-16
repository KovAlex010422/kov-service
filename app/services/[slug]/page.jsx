import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/sections/Footer/Footer";

import { servicePages } from "@/src/data/servicePages";
import { projects } from "@/src/data/projects";

export async function generateStaticParams() {
    return servicePages.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({
    params,
}) {
    const { slug } = await params;

    const service = servicePages.find(
        (item) => item.slug === slug
    );

    if (!service) {
        return {
            title: "Послуга не знайдена",
        };
    }

    return {
        title: service.seoTitle,
        description: service.description,
    };
}

export default async function ServicePage({
    params,
}) {
    const { slug } = await params;

    const service = servicePages.find(
        (item) => item.slug === slug
    );

    if (!service) {
        notFound();
    }

    const relatedProjects = projects.filter(
        (project) =>
            service.categories?.includes(
                project.category
            )
    );

    return (
        <>
            <Header />

            <main>

                <section className="py-24 bg-orange-50">
                    <div className="max-w-6xl mx-auto px-6">

                        <h1 className="text-5xl font-bold mb-6">
                            {service.title}
                        </h1>

                        <p className="text-xl text-slate-600">
                            {service.description}
                        </p>

                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="max-w-5xl mx-auto px-6">

                        <h2 className="text-3xl font-bold mb-8">
                            Що ми виконуємо
                        </h2>

                        <ul className="space-y-4">
                            {service.services.map((item) => (
                                <li
                                    key={item}
                                    className="text-lg text-slate-700"
                                >
                                    ✓ {item}
                                </li>
                            ))}
                        </ul>

                    </div>
                </section>
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">

                        <h2 className="text-3xl font-bold mb-10">
                            Приклади виконаних робіт
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {relatedProjects.map((project) => (
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
            "
                                    >
                                        <div className="relative h-64">

                                            <Image
                                                src={project.cover}
                                                alt={project.title}
                                                fill
                                                sizes="33vw"
                                                className="object-cover"
                                            />

                                        </div>

                                        <div className="p-5">

                                            <h3 className="font-semibold text-lg">
                                                {project.title}
                                            </h3>

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
                </section>
                <section className="py-24 bg-orange-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">

                        <h2 className="text-3xl font-bold mb-4">
                            Потрібна консультація?
                        </h2>

                        <p className="text-slate-600 mb-8">
                            Залиште заявку і ми
                            зв'яжемося з вами.
                        </p>

                        <Link
                            href="/#request"
                            className="
                inline-block
                bg-orange-500
                hover:bg-orange-600
                text-white
                px-8
                py-4
                rounded-xl
                transition
              "
                        >
                            Замовити консультацію
                        </Link>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}