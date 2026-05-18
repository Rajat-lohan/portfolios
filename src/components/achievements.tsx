export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          250+ Problems Solved
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          Multiple Full Stack Projects
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          Strong DSA & System Design
        </div>
      </div>
    </section>
  );
}