const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "System Design",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}