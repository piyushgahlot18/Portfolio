import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "./ParticlesBackground";
import Tilt from "react-parallax-tilt";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#070d1a] overflow-hidden text-white z-10"
    >
      <ParticlesBackground />

      <div className="relative max-w-7xl mx-auto w-full px-8 md:px-24 flex flex-col md:flex-row items-center gap-24">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex-shrink-0"
        >
          {/* Glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-3xl rounded-3xl animate-pulse"></div>

          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
          >
            <motion.img
              src="/piyushimg.webp"
              alt="profile"
              className="w-80 h-120 md:w-[420px] rounded-3xl shadow-2xl border border-white/10"
            />
          </Tilt>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="max-w-xl"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-blue-400 tracking-widest mb-4"
          >
            WELCOME TO MY PORTFOLIO
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Piyush Gahlot
            </span>
          </motion.h1>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-2xl text-gray-300 mb-6"
          >
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Problem Solver",
                "Data Structures Enthusiast",
                "Future Software Engineer"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-gray-400 mb-10 leading-relaxed"
          >
            I build scalable web applications and prepare for product-based
            company placements. Focused on writing clean, optimized and
            production-ready code.
          </motion.p>

          {/* PREMIUM BUTTONS */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="flex gap-6"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 rounded-xl font-semibold overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:scale-110"></span>
              <span className="relative text-white">View Projects</span>
            </a>

            <a
              href="#contact"
              className="relative px-8 py-3 rounded-xl font-semibold border border-blue-500 text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}