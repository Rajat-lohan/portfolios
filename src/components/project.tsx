const projects = [
  {
    title: "AI Chatbot",
    description: "Real-time AI chat application",
  },
  {
    title: "Ecommerce Platform",
    description: "Full-stack ecommerce platform",
  },
  {
    title: "LeetCode Tracker",
    description: "Track coding progress and ratings",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition"
          >
            <div className="h-56 bg-zinc-800" />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-zinc-400">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}