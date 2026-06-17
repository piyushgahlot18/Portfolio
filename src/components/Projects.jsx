import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Trading Platform",
      desc: "Stock trading simulation with portfolio tracking and real-time updates.",
      tech: ["React", "Node.js","Express.js", "MongoDB"],
      image: "/trading.png",
      vercelUrl: "https://trading-platform-brown.vercel.app/",
    },
    {
      title: "Govindam Saarees",
      desc: "Your destination for elegant sarees, ethnic fashion, and timeless style.",
      tech: ["React.js", "Tailwind CSS"],
      image: "./dist/sare.jpg",
      vercelUrl: "https://govindam-saarees.vercel.app/",
    },
    {
      title: "Smart Compressor",
      desc: "Compress images to an exact file size instantly — right in your browser.",
      tech: ["React.js", "Tailwind CSS"],
      image: "./dist/compress.png",
      vercelUrl: "https://smart-compress.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#070d1a] text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/20"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* TECH BADGES */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <a
                  href={project.vercelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live site`}
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-400/40 bg-blue-500/15 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:border-blue-300 hover:bg-blue-500/25 hover:text-white"
                >
                  <ExternalLink size={16} />
                  Open
                </a>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
