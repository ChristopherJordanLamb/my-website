import ScrambleTypewriter from "../components/ScrambleTypeWriter";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center pt-16">
      <div className="textWrapper text-left"> {/* 👈 Force left alignment */}
        <h1 className="title">
          <ScrambleTypewriter text="Scryntax" />
        </h1>
        <h2>
          <ScrambleTypewriter text="A software developer robot building game" />
        </h2>
      </div>
    </div>
  
  );
}