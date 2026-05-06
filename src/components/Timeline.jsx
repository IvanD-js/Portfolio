export default function Timeline() {

  const timeline = [

    {
      year:"2023",
      title:"Started Computer Systems Engineering"
    },

    {
      year:"2025",
      title:"IT Internship"
    },

    {
      year:"2025",
      title:"Built Full Stack Projects"
    },

    {
      year:"2026",
      title:"Open to Junior Opportunities"
    }

  ];

  return (

    <section className="py-28 px-6">

      <div className="max-w-5xl mx-auto">

        <h2
          className="
          text-4xl
          text-white
          font-bold
          mb-12
        "
        >
          My Journey
        </h2>

        <div className="space-y-8">

          {
            timeline.map((item,index)=>(

              <div

                key={index}

                className="
                border-l-2
                border-blue-500
                pl-6
                "
              >

                <p className="text-blue-400">
                  {item.year}
                </p>

                <h3 className="text-white text-xl">
                  {item.title}
                </h3>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  )

}