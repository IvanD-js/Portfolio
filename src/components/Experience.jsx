export default function Experience() {
  return (
    <section id="experience" className="section-wrap bg-[rgba(17,17,19,0.55)]">
      <div className="container-custom">
        <div className="mb-12">
          <span className="mb-3 inline-flex text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Experience
          </span>

          <h2 className="section-title">
            Professional Experience
          </h2>

          <p className="section-subtitle max-w-3xl">
            Practical experience in technical support, equipment maintenance and
            infrastructure assistance.
          </p>
        </div>

        <article className="card-shell p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-[var(--border)] pb-6 md:flex-row md:items-start">
            <div>
              <h3 className="text-2xl font-bold text-white">
                IT Intern — Social Service
              </h3>

              <p className="mt-2 text-[var(--accent)]">
                Instituto Tecnológico de Tláhuac
              </p>
            </div>

            <span className="w-fit rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)]">
              Jun 2025 — Dec 2025
            </span>
          </div>

          <ul className="mt-6 grid gap-4 text-[var(--muted)] md:grid-cols-2">
            <li className="rounded-2xl bg-[var(--surface-2)] p-4">
              Preventive and corrective maintenance of computer equipment.
            </li>

            <li className="rounded-2xl bg-[var(--surface-2)] p-4">
              Support for network nodes and technical infrastructure.
            </li>

            <li className="rounded-2xl bg-[var(--surface-2)] p-4">
              Installation and maintenance support for CCTV systems.
            </li>

            <li className="rounded-2xl bg-[var(--surface-2)] p-4">
              Technical support for students and administrative activities.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}