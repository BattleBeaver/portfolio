import AnimatedText from "@/components/AnimatedText";
import ControlBar from "@/components/ControlBar";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="border h-1/2 w-1/2 grid grid-rows-[20px_minmax(0px,_1fr)]">
        <ControlBar />
        <AnimatedText />
      </div>
    </div>
  );
}
