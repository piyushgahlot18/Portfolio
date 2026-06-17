import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#070d1a] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Let's Work Together
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-gray-400 text-lg">
              Have a project idea, internship opportunity, or just want to connect?
              Feel free to reach out through the form or social platforms.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 text-3xl">

              <a
                href="https://instagram.com/piyush_.gahlot"
                target="_blank"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-pink-500/20 hover:border-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/piyush-gahlot-7b265227b"
                target="_blank"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=piyushgahlot234@gmail.com&su=Portfolio%20Inquiry"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500 transition duration-300"
              >
                <MdEmail />
              </a>

             

            </div>
          </motion.div>

          

        </div>
      </div>
    </section>
  );
}