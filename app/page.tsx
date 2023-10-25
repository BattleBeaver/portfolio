import Image from "next/image";
import me from "../assets/Me.jpg";
import ControlBar from "@/components/ControlBar";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="border-2 border-gray-300 w-3/4 flex gap-1 flex-col overflow-hidden h-3/4">
        <ControlBar />
        <div className="flex flex-row justify-between h-full">
          {/* <div className="flex w-3/4 h-full border p-3 items-center justify-center bg-black mt-4 text-4xl text-lime-500 mx-3"> */}
          <AnimatedText />
          {/* </div> */}
          <Image
            src={me}
            alt="Picture of me"
            height={250}
            width={530}
            className="pb-1"
          />
        </div>
      </div>
    </div>
  );
}
