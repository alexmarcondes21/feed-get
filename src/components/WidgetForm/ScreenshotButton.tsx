import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "./Loading";

interface ScreenshotButtonProps {
  screenshot: string | null; 
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakenScreenshot, setIsTakenScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakenScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshotTook(base64image);

    setIsTakenScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
       onClick={() => onScreenshotTook(null)}
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url${screenshot}`
        }}
     >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="bg-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-[#8257e6] "
    >
      {isTakenScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-10 h-6 text-zinc-500" />
      )}
    </button>
  );
}
