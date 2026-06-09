import skills from "../data/skills";

export default function TechStack() {
  return (
    <section className="section-wrap bg-[rgba(17,17,19,0.55)]">
      <div className="container-custom">
        <div className="mb-12">
          <span className="mb-3 inline-flex text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Skills
          </span>

          <h2 className="section-title">
            Tech Stack
          </h2>

          <p className="section-subtitle max-w-3xl">
            Technologies and tools I use to build backend services, web
            applications and full stack solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}