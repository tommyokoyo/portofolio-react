export default function AboutHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      
      {/* Avatar */}
      <div className="flex justify-center md:justify-start">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-[2px]">
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
            <span className="text-gray-500">
              <img src="https://avatars.githubusercontent.com/u/39227748?v=4" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover" /></span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Security Engineer
        </h1>
        <p className="mt-4 text-cyan-400 text-lg">
          Offensive & Defensive Operations
        </p>
        <p className="mt-6 text-gray-400 max-w-xl">
          I build, break, and secure systems — from network edges to cloud
          workloads and application cores.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition">
            <a href="/public/Thomas_Okoyo_cv.pdf" download>Download CV</a>
          </button>
          <button className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-cyan-400 transition">
            <a href="https://github.com/tommyokoyo" target="_blank" rel="noopener noreferrer">Github</a>
          </button>
        </div>
      </div>

    </section>
  )
}
