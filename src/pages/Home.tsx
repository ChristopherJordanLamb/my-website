import ScrambleTypewriter from "../components/ScrambleTypeWriter";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-green-400 font-mono">
      {/* Top header */}
      <div className="w-screen flex flex-col items-center pt-16">
        <div className="textWrapper text-left">
          <h1 className="title">
            <ScrambleTypewriter text="Christopher Lamb" />
          </h1>
          <h2>
            <ScrambleTypewriter text="Software Engineer" />
          </h2>
        </div>
      </div>

      {/* Project menu */}
      <div className="w-screen flex justify-center mt-12 pb-16">
        <div className="flex flex-wrap gap-8 max-w-5xl justify-start">
          {/* Scryntax Box */}
          <div className="ScrTab bg-black border border-cyan-500 rounded-2xl shadow-lg p-6 w-[250px] text-center hover:scale-105 transition-transform duration-200">
            <h3 className="text-cyan-500 text-xl font-bold mb-2">
              <ScrambleTypewriter text="Scryntax" />
            </h3>
            <p className="text-cyan-400 text-sm">
              A robot-building game in development
            </p>
            <div className="videoWrapper w-[500px] h-[300px] my-6">
              <video>
                src="/videos/ScryntaxDemo.mp4"   // put the file in public/videos/
                controls
                autoPlay={true}
                loop={true}
                muted={true}
                className="w-full h-full rounded-lg shadow-lg"
              </video>
            </div>
          </div>

          {/* Future project box */}
          <div className="ScrTab bg-black border border-green-400 rounded-2xl shadow-lg p-6 w-[250px] text-center hover:scale-105 transition-transform duration-200">
            <h3 className="text-green-400 text-xl font-bold mb-2">
              Project 2
            </h3>
            <p className="text-green-300 text-sm">
              Coming soon...
            </p>
          </div>

          {/* Future project box */}
          <div className="ScrTab bg-black border border-green-400 rounded-2xl shadow-lg p-6 w-[250px] text-center hover:scale-105 transition-transform duration-200">
            <h3 className="text-green-400 text-xl font-bold mb-2">
              Project 3
            </h3>
            <p className="text-green-300 text-sm">
              Coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}