import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e)=>{

    e.preventDefault();

    emailjs.sendForm(

      "service_u9gwdsq", // service ID
      "template_2urije9", // template ID

      form.current,

      "3zg6ZvGNRgWALaSZ0" // public key

    );

    e.target.reset();

    alert("Message sent successfully!");

  };

  return (

    <section
      id="contact"
      className="py-28 px-6"
    >

      <div className="max-w-3xl mx-auto">

        <h2
          className="
          text-4xl
          text-white
          font-bold
          mb-10
        "
        >
          Contact Me
        </h2>

        <form

          ref={form}

          onSubmit={sendEmail}

          className="space-y-6"
        >

          <input

            name="user_name"

            placeholder="Your name"

            className="
            w-full
            bg-slate-800
            text-white
            p-4
            rounded-xl
            outline-none
            border
            border-slate-700
            "
          />

          <input

            name="user_email"

            placeholder="Your email"

            className="
            w-full
            bg-slate-800
            text-white
            p-4
            rounded-xl
            border
            border-slate-700
            "
          />

          <textarea

            name="message"

            rows="6"

            placeholder="Your message"

            className="
            w-full
            bg-slate-800
            text-white
            p-4
            rounded-xl
            border
            border-slate-700
            "
          />

          <button

            className="
            px-8
            py-3
            bg-blue-600
            rounded-xl
            text-white
            font-medium
            hover:scale-105
            duration-300
            "
          >

            Send Message

          </button>

        </form>

      </div>

    </section>

  )

}