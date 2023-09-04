"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Loading() {
  return (
    <div>
      <Player
        src={
          "https://lottie.host/2e9bafde-cf8c-4732-9380-da2a8722836e/L8y5GZ511O.json"
        }
        background="transparent"
        loop
        autoplay
        style={{ height: "500px", width: "500px" }}
      />
    </div>
  );
}
