import projects from "../data/projects";

export default function Projects() {

    return (

        <section
            id="projects"
            className="
                py-28
                px-6
                bg-slate-900/40
            "
        >

            <div className="max-w-6xl mx-auto">

                <h2
                    className="
                        text-4xl
                        text-white
                        font-bold
                        mb-12
                    "
                >
                    Projects
                </h2>

                <div
                    className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                    "
                >

                    {
                        projects.map(project => (

                            <div
                                key={project.id}

                                className="
                                    border
                                    border-slate-800
                                    rounded-2xl
                                    p-6
                                    duration-300
                                    hover:-translate-y-2
                                    hover:shadow-2xl
                                "
                            >

                                <img

                                    src={project.image}

                                    alt={project.title}

                                    className="
                                        rounded-xl
                                        mb-5
                                        w-full
                                        h-52
                                        object-cover
                                        border
                                        border-slate-800
                                      "
                                />

                                <h3
                                    className="
                                        text-2xl
                                        text-white
                                        mb-4
                                    "
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className="
                                        text-slate-400
                                        mb-6
                                     "
                                >
                                    {project.description}
                                </p>

                                <div
                                    className="
                                        flex
                                        flex-wrap
                                        gap-2
                                        mb-6
                                    "
                                >

                                    {
                                        project.stack.map((tech, index) => (

                                            <span
                                                key={index}
                                                className="
                                                text-sm
                                                px-3
                                                py-1
                                                bg-blue-950
                                                rounded-lg
                                                text-blue-300
                                            "
                                            >
                                                {tech}
                                            </span>

                                        ))
                                    }

                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                        text-blue-400
                                    "
                                >
                                    View Code
                                </a>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    )

}