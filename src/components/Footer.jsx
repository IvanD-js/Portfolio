import {

  FaGithub,

  FaLinkedin,

  FaXTwitter,

  FaEnvelope

} from "react-icons/fa6";

export default function Footer() {

  return (

    <footer
      className="
      border-t
      border-slate-800
      py-8
    "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        flex
        justify-center
        gap-8
        text-2xl
        text-slate-400
        "
      >

        <a
          href="https://github.com/IvanD-js"
          target="_blank"
        >
          <FaGithub/>
        </a>

        <a
          href="https://linkedin.com/in/ivandev25"
          target="_blank"
        >
          <FaLinkedin/>
        </a>

        <a
          href="mailto:ivandev25@gmail.com"
        >
          <FaEnvelope/>
        </a>

        <a href="#">
          <FaXTwitter/>
        </a>

      </div>

    </footer>

  )

}