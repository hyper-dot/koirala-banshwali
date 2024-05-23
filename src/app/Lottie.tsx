"use client";
import Lottie from "react-lottie";
import animationData from "@/lottie.json";

export const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="fixed md:left-[40%] scale-50 md:scale-100 -top-10 left-20 md:top-[20%]">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};
