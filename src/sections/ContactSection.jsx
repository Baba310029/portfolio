import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import SectionContacts from "../components/SectionContacts";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  
  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     formRef.current,
    //     "YOUR_PUBLIC_KEY"
    //   )
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  }

  return (
    <section
      id="contact"
      className="relative py-36 bg-slate-50 overflow-hidden"
    >
      {/* Decorative bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <span className="absolute w-[320px] h-[320px]
                        bg-teal-200/50 rounded-full
                        top-[-10px] left-[60px]" />
        <span className="absolute w-[520px] h-[520px]
                        bg-emerald-100/40 rounded-full
                        top-[20%] right-[-220px]" />
        <span className="absolute w-[300px] h-[300px]
                        bg-slate-300/40 rounded-full
                        bottom-[-80px] left-[65%]" />
        <span className="absolute w-[300px] h-[300px]
                        bg-slate-200/40 rounded-full
                        bottom-[20px] left-[5%]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center">
          Let’s Build Something{" "}
          <span className="text-teal-600">Meaningful</span> Together
        </h2>

        <p className="text-center text-slate-600 mt-4">
          I’m open to opportunities, collaborations, and conversations.
        </p>

        {/* CONTACT CARDS */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <ContactCard
            icon={<FaEnvelope />}
            text="babasree1234@gmail.com"
            link="mailto:babasree1234@gmail.com"
            bg="bg-teal-100"
          />

          <ContactCard
            icon={<FaPhoneAlt />}
            text="+91 7207052930"
            link="tel:+917207052930"
            bg="bg-emerald-100"
          />
        </div>

        {/* FORM */}
        <form className="mt-16 space-y-6">
          <Input name="from_name" placeholder="Your Name" required />
          <Input name="from_email" placeholder="Your Email" required />
          <Input name="subject" placeholder="Subject" required />
          <Textarea name="message" placeholder="Your Message" required />

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-10 py-3 rounded-full
                        border border-teal-600
                        text-teal-600 font-medium
                        transition-all duration-300
                        hover:bg-teal-600 hover:text-white
                        hover:shadow-lg hover:scale-105
                        disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
            {/* FEEDBACK */}
          {status === "success" && (
            <p className="text-center text-green-600 mt-4">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-center text-red-500 mt-4">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
      <SectionContacts/>
    </section>
  );
}

/* ---------- Components ---------- */

function ContactCard({ icon, text, link, bg }) {
  return (
    <a
      href={link}
      className={`flex items-center gap-4
                  rounded-xl p-5
                  transition-all duration-300
                  hover:scale-[1.03] hover:shadow-lg
                  ${bg}`}
    >
      <div className="text-2xl text-teal-600">
        {icon}
      </div>
      <p className="text-slate-700 font-medium">
        {text}
      </p>
    </a>
  );
}

function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-5 py-4
                 rounded-xl bg-slate-200
                 outline-none
                 transition-all duration-300
                 focus:ring-2 focus:ring-teal-500
                 hover:bg-white hover:shadow-md"
    />
  );
}

function Textarea({ placeholder }) {
  return (
    <textarea
      rows="5"
      placeholder={placeholder}
      className="w-full px-5 py-4
                 rounded-xl bg-slate-200
                 outline-none resize-none
                 transition-all duration-300
                 focus:ring-2 focus:ring-teal-500
                 hover:bg-white hover:shadow-md"
    />
  );
}