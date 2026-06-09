import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: ""
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: "",
      error: ""
    });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      e.target.reset();

      setStatus({
        loading: false,
        success: "Message sent successfully. I will reply as soon as possible.",
        error: ""
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: "Something went wrong. Please try again or contact me by email."
      });
    }
  };

  return (
    <section id="contact" className="section-wrap bg-[rgba(17,17,19,0.55)]">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="mb-3 inline-flex text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Contact
          </span>

          <h2 className="section-title">
            Let’s build something useful.
          </h2>

          <p className="section-subtitle">
            Feel free to contact me for internships, junior opportunities,
            collaboration or software development projects.
          </p>

          <div className="mt-8 card-shell p-6">
            <p className="text-sm text-[var(--muted)]">Email</p>

            <a
              href="mailto:ivandev25@gmail.com"
              className="mt-2 inline-flex text-white transition hover:text-[var(--accent)]"
            >
              ivandev25@gmail.com
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="card-shell p-6 md:p-8">
          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm text-[var(--muted)]">
                Name
              </label>

              <input
                name="user_name"
                type="text"
                required
                placeholder="Your name"
                className="input-shell"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[var(--muted)]">
                Email
              </label>

              <input
                name="user_email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="input-shell"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[var(--muted)]">
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                required
                placeholder="Tell me about your project or opportunity..."
                className="input-shell resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="btn-primary w-fit disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.success && (
              <p className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
                {status.success}
              </p>
            )}

            {status.error && (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                {status.error}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}