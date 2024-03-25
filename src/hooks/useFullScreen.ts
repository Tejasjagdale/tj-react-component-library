import { useRef } from "react";

export const useFullScreen = () => {
  const fullScreenRef = useRef<HTMLDivElement>(null);

  const toggleFullScreen = () => {
    const element = fullScreenRef.current;
    if (element) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        element.requestFullscreen().catch((err: { message: any; name: any; }) => {
          console.log(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
      }
    }
  };

  return { fullScreenRef, toggleFullScreen };
};