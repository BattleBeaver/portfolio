import Image from "next/image";
import minimize from "../icons/minimize.png";
import maximize from "../icons/maximize.png";
import closeButton from "../icons/closeButton.png";

const ControlBar = () => {
  return (
    <div className="flex justify-end items-center gap-1 w-full h-4 bg-gray-300">
      <Image
        src={minimize}
        height={15}
        width={15}
        alt="Minimize icon"
        className="bg-gray-400 hover:cursor-pointer hover:bg-gray-600 transition-colors"
      />
      <Image
        src={maximize}
        height={15}
        width={15}
        alt="Maximize icon"
        className="bg-gray-400 hover:cursor-pointer hover:bg-gray-600 transition-colors"
      />
      <Image
        src={closeButton}
        height={15}
        width={15}
        alt="Close button icon"
        className="bg-red-400 hover:cursor-pointer hover:bg-red-600 transition-colors"
      />
    </div>
  );
};

export default ControlBar;
