import Image from 'next/image'
import HeroSection from './components/section/herosection';
import Background from './components/section/herosection/background';

export default function Home() {
  return (
    <main className="flex  h-full w-screen flex-col items-center justify-center  overflow-x-hidden bg-gradient-to-tl from-transparent via-purple-500/5 to-slate-900  ">
      {" "}
      <Background /> <Background />
      <HeroSection signedIn={false} />
    </main>
  );
}
