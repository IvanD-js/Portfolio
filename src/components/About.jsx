export default function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="mb-3 inline-flex text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            About
          </span>

          <h2 className="section-title">
            Backend-focused developer building practical software solutions.
          </h2>
        </div>

        <div className="card-shell p-8">
          <p className="section-subtitle mt-0">
            I am a Computer Systems Engineering student specialized in Web
            Development Technologies. My main focus is backend development with
            Java and Spring Boot, but I also have experience collaborating on
            frontend and full stack projects.
          </p>

          <p className="section-subtitle">
            I enjoy building applications that solve real problems, applying
            clean structure, database design, REST APIs and user-centered
            interfaces. My goal is to continue growing as a backend developer
            and contribute to professional software projects.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5">
              <p className="text-sm text-[var(--muted)]">Education</p>
              <h3 className="mt-2 font-semibold text-white">
                Computer Systems Engineering
              </h3>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5">
              <p className="text-sm text-[var(--muted)]">Specialization</p>
              <h3 className="mt-2 font-semibold text-white">
                Web Development Technologies
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}