export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(13,13,14,0.82)] backdrop-blur-xl">
      <nav className="container-custom flex h-[72px] items-center justify-between px-6">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="IvanDev logo"
            className="h-8 w-auto"
          />

          <span className="text-lg font-bold text-white">
            IvanDev
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <li>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </li>

          <li>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </li>
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-secondary">
          Let’s Talk
        </a>
      </nav>
    </header>
  );
}