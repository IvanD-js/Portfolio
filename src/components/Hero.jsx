import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="section-wrap pt-28 md:pt-36">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
            Backend Developer • Java • Spring Boot
          </span>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
            Building robust backend solutions with clean architecture and modern web technologies.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I’m Julio Iván Pérez Romero, a Computer Systems Engineering student
            focused on backend development with Java and Spring Boot, with
            experience building full stack applications using React, Node.js and
            relational/non-relational databases.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="/CV-IVAN-ROMERO.pdf" download className="btn-secondary">
              Download CV
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="card-shell p-5 text-center">
              <h3 className="text-2xl font-bold text-white">5+</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Projects Built</p>
            </div>

            <div className="card-shell p-5 text-center">
              <h3 className="text-2xl font-bold text-white">2+</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Years Coding</p>
            </div>

            <div className="card-shell p-5 text-center">
              <h3 className="text-2xl font-bold text-white">B1</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">English Level</p>
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="card-shell p-7"
        >
          <h2 className="mb-6 text-2xl font-bold text-white">
            Profile Summary
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-2)]">
                Location
              </p>
              <p className="mt-2 text-white">Mexico City, Mexico</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-2)]">
                Main Focus
              </p>
              <p className="mt-2 text-white">
                Backend Development with Java & Spring Boot
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-2)]">
                Core Stack
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="chip">Java</span>
                <span className="chip">Spring Boot</span>
                <span className="chip">REST APIs</span>
                <span className="chip">MySQL</span>
                <span className="chip">PostgreSQL</span>
                <span className="chip">MongoDB</span>
                <span className="chip">React</span>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-2)]">
                Availability
              </p>
              <p className="mt-2 text-white">
                Open to internships and junior backend opportunities
              </p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}