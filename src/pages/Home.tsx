import { Link } from "react-router-dom";
import ScrambleTypewriter from "../components/ScrambleTypeWriter";
import useMatrixEffect from "../hooks/useMatrixEffect";

export default function Home() {
  // Enable the Matrix effect on the canvas
  useMatrixEffect("matrixCanvas");

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
          <Link to="/scryntax" className="block">
            <div className="ScrTab bg-black border border-cyan-500 rounded-2xl shadow-lg p-6 w-[300px] text-center hover:scale-105 transition-transform duration-200 cursor-pointer relative overflow-hidden">
              
              {/* Matrix Background */}
              <div className="absolute inset-0 z-0 opacity-30">
                <canvas id="matrixCanvas" className="w-full h-full"></canvas>
              </div>

              {/* Foreground Content */}
              <div className="relative z-10">
                <h3 className="text-cyan-500 text-xl font-bold mb-2">
                  <ScrambleTypewriter text="Scryntax" />
                </h3>
                <p className="text-cyan-400 text-sm">
                  A robot-building game in development
                </p>

                {/* Video Wrapper */}
                <div className="w-full h-full rounded-lg shadow-lg object-cover ring-2 ring-cyan-500 drop-shadow-[0_0_5px_#00f7ff]">
                  <video
                    src="/videos/ScryntaxDemoMute.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full rounded-lg shadow-lg object-cover pointer-events-none select-none"
                  />
                </div>
              </div>
            </div>
          </Link>

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
