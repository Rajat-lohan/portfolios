"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <h1 className="text-2xl font-black">
          Rajat<span className="text-blue-600">.</span>
        </h1>

        <nav className="hidden md:flex items-center gap-10 font-medium text-gray-700">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold">
          Hire Me
        </button>
      </div>
    </header>
  );
}