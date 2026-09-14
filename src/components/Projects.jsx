import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <div className="container-custom">
        <div className="mb-12">
          <span className="mb-3 inline-flex text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Portfolio
          </span>

          <h2 className="section-title">
            Selected Projects
          </h2>

          <p className="section-subtitle max-w-3xl">
            A selection of projects focused on backend development, full stack
            integration, database management and practical problem solving.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="card-shell group overflow-hidden transition duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="overflow-hidden border-b border-[var(--border)] h-52 w-full flex items-center justify-center bg-zinc-900/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <span className="shrink-0 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                      {project.status}
                    </span>
                  </div>

                  <p className="mb-5 leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>

                  <ul className="mb-5 space-y-2 text-sm text-[var(--muted)]">
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        <span className="text-[var(--accent)]">•</span>{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.map((tech, index) => (
                      <span key={index} className="chip text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}