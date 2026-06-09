import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] px-6 py-10">
      <div className="container-custom flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-lg font-bold text-white">
            IvanDev
          </h2>

          <p className="mt-2 text-sm text-[var(--muted)]">
            Backend Developer focused on Java, Spring Boot and full stack solutions.
          </p>
        </div>

        <div className="flex items-center gap-5 text-xl text-[var(--muted)]">
          <a
            href="https://github.com/IvanD-js"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/ivandev25"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:ivandev25@gmail.com"
            className="transition hover:text-white"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}