import ScrambleTypewriter from "../components/ScrambleTypeWriter";
export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center pt-16">
      <h1 className="title">
        <ScrambleTypewriter text="Christopher Lamb" />
      </h1>
      <h2>
        <ScrambleTypewriter text="Software Engineer" />
      </h2>
      <p>
        <ScrambleTypewriter text="Software Engineer" />
      </p>
    </div>
  );
}