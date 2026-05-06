import skills from "../data/skills";

export default function TechStack() {

  return (

    <section
      className="py-28 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <h2
          className="
          text-4xl
          text-white
          font-bold
          mb-10
          hover:scale-110
          hover:border-blue-500
          duration-300
          cursor-default
        "
        >
          Tech Stack
        </h2>

        <div
          className="
          flex
          flex-wrap
          gap-4
        "
        >

          {
            skills.map((skill,index)=>(

              <span
                key={index}
                className="
                px-5
                py-3
                rounded-xl
                bg-slate-800
                text-slate-300
                border
                border-slate-700
              "
              >
                {skill}
              </span>

            ))
          }

        </div>

      </div>

    </section>

  )

}