const timeline = [
  {
    year: "2023",
    title: "Started Computer Systems Engineering",
    description:
      "Began my academic path in software development, programming fundamentals and computer systems."
  },
  {
    year: "2025",
    title: "IT Internship",
    description:
      "Worked on technical support, preventive maintenance, network assistance and infrastructure tasks."
  },
  {
    year: "2025",
    title: "Full Stack Projects",
    description:
      "Built practical applications using Java, Spring Boot, React, Node.js and databases."
  },
  {
    year: "2026",
    title: "Open to Junior Opportunities",
    description:
      "Currently focused on backend development and looking for internships or junior roles."
  }
];

export default function Timeline() {
  return (
    <section className="section-wrap">
      <div className="container-custom">
        <div className="mb-12">
          <span className="mb-3 inline-flex text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Journey
          </span>

          <h2 className="section-title">
            My Developer Path
          </h2>
        </div>

        <div className="relative space-y-6">
          {timeline.map((item, index) => (
            <article
              key={index}
              className="card-shell relative ml-5 p-6 before:absolute before:-left-[1.85rem] before:top-8 before:h-4 before:w-4 before:rounded-full before:bg-[var(--accent)]"
            >
              <div className="absolute -left-[1.38rem] top-0 h-full w-px bg-[var(--border)]" />

              <p className="text-sm font-semibold text-[var(--accent)]">
                {item.year}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-[var(--muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}