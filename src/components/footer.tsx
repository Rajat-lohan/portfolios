export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-12">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

          <a href="#home" className="hover:text-white transition">
            Home
          </a>
        </div>

        <div className="text-center text-gray-500">
          © 2026 Rajat Lohan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}