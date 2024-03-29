/// <reference types="react" />
declare const useFullScreen: () => {
    fullScreenRef: import("react").RefObject<HTMLDivElement>;
    toggleFullScreen: () => void;
};
export default useFullScreen;
