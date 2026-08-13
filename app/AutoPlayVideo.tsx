"use client";

import { useEffect, useRef, type VideoHTMLAttributes } from "react";

type Props = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & {
  src: string;
};

export default function AutoPlayVideo({ src, className, ...props }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.removeAttribute("controls");

    const tryPlay = () => {
      if (!video.paused) return;
      const promise = video.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => undefined);
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) tryPlay();
      },
      { threshold: 0.01 }
    );

    observer.observe(video);
    video.addEventListener("loadedmetadata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("canplaythrough", tryPlay);
    window.addEventListener("pageshow", tryPlay);
    document.addEventListener("visibilitychange", onVisibility);

    // iOS Low Power / browser policy fallback: the first user interaction
    // re-attempts playback without showing native controls.
    window.addEventListener("touchstart", tryPlay, { passive: true });
    window.addEventListener("pointerdown", tryPlay, { passive: true });

    tryPlay();

    return () => {
      observer.disconnect();
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("canplaythrough", tryPlay);
      window.removeEventListener("pageshow", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("pointerdown", tryPlay);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      {...props}
    />
  );
}
