import React from "react";
import { Exo } from "next/font/google";
import { LottieAnimation } from "./Lottie";
import Link from "next/link";

const exo = Exo({ subsets: ["latin"] });

const page = () => {
  return (
    <div
      style={{ background: "url(/photo.svg) no-repeat 100% 100%/80%" }}
      className="h-screen overflow-hidden relative"
    >
      <div className="flex flex-col justify-between h-full bg-white md:bg-transparent">
        <div className="space-y-4 flex flex-col justify-center h-full px-10 -translate-y-20">
          <img width={100} src="/logo.svg" alt="" />
          <h1 className="text-xl md:text-5xl capitalize">
            Koirala Digital Banshawali is <br /> under construction
          </h1>
          <p>We are currently working on it</p>
          <Link
            target="_blank"
            href="https://www.facebook.com/koiralasewasamaj.np?mibextid=LQQJ4d"
            className="bg-blue-700 text-white w-fit px-4 py-2 rounded-xl shadow-xl"
          >
            Learn More
          </Link>

          <LottieAnimation />

          <div className="flex gap-4 pt-10 items-center">
            <span>Powered by</span>
            <div
              className={`text-2xl ${exo.className} font-semibold flex gap-2`}
            >
              <img src="/metalogo.svg" width={50} alt="" />
              <Link target="_blank" href="https://metalogic.com.np">
                Metalogic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
