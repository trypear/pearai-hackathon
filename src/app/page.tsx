import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden relative">
        <img
          src="/pearai-hackathon.svg"
          alt="PearAI Hackathon"
          className="w-full h-full absolute"
        />
        <Link href="https://forms.gle/Jph47doeUHy1CP1J6" target="_blank" className="signup-button relative top-80 z-10">Sign up early today</Link>
    </div>
  );
}
