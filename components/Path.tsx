"use client";
import folderClosed from "../icons/folderClosed.png";
import closedButton from "../icons/closeButton.png";

import { usePathname } from "next/navigation";
import Image from "next/image";

const Path = () => {
  const pathname = usePathname();
  const displayedPath =
    pathname === "/"
      ? "/Home"
      : "/" + pathname.charAt(1).toUpperCase() + pathname.slice(1);
  return (
    <div className="flex flex-row justify-start bg-gray-300 text-slate-900 text-lggap-1 items-center">
      <Image
        src={folderClosed}
        alt="Closed folder icon"
        height={15}
        width={15}
        className="h-5 ml-1"
      />
      <span className="ml-1">{"Dmytro" + displayedPath}</span>
      <Image
        src={closedButton}
        alt="Close button"
        height={15}
        width={17}
        className="h-5 ml-auto bg-red-600 hover:cursor-pointer mr-1"
      />
    </div>
  );
};

export default Path;
