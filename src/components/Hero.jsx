import { motion } from "framer-motion";

export default function Hero() {

  return (

    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      text-center
      px-6
    "
    >

      <motion.div

        initial={{ opacity:0, y:40 }}

        animate={{ opacity:1, y:0 }}

        transition={{ duration:0.8 }}

      >

        <h1 className=" text-5xl text-blue-400 mb-4">
          Backend Developer
        </h1>

        <h3
          className="
          text-4xl
          sm:text-5xl
          md:text-7xl
          font-bold
          text-white
          mb-6
        "
        >
          Julio Iván Pérez Romero
        </h3>

        <p
          className="
          text-slate-300
          text-xl
          max-w-2xl
          mx-auto
          mb-8
        "
        >
          Java & Spring Boot

          Building scalable backend solutions
          and modern full stack applications.

          Based in Mexico City.
          Open to internships and junior opportunities.
        </p>

        <div
  className="
  flex
  justify-center
  gap-10
  mt-10
  text-slate-400
"
>

  <div>
    <h3 className="text-white text-2xl">
      5+
    </h3>

    <p>Projects</p>
  </div>

  <div>
    <h3 className="text-white text-2xl">
      2+
    </h3>

    <p>Years Coding</p>
  </div>

  <div>
    <h3 className="text-white text-2xl">
      B2
    </h3>

    <p>English</p>
  </div>

</div>

        <div className="flex gap-4 justify-center">

          <a
            href="#projects"
            className="
            px-6
            py-3
            bg-blue-600
            rounded-xl
            text-white
            font-medium
            hover:scale-105
            duration-300
          "
          >
            View Projects
          </a>

          <a
            href="/CV-IVAN-ROMERO.pdf"
            download
            className="
            px-6
            py-3
            border
            border-slate-700
            rounded-xl
            text-white
          "
          >
            Download CV
          </a>

        </div>

      </motion.div>

    </section>

  )
}