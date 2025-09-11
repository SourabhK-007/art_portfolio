"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import mooniColor from "../../public/images/mooni-color.png";
import mooniBw from "../../public/images/mooni_bw.png";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.set('#yellow-block', {
                clipPath: "polygon(20% 50%, 72% 0, 100% 0%, 0 95%)",
                borderRadius: "10% 10% 40% 10%",
            })
            gsap.from("#yellow-block", {
                clipPath: "polygon(30% 10%, 100% 20%, 100% 80%, 0% 100%)",
                borderRadius: "30% 20% 10% 10%",
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: "#yellow-block",
                    start: "center center",
                    end: "bottom center",
                    scrub: true,
                },
            });
        },
        { scope: container }
    );

    return (
        <div className="relative h-dvh w-screen overflow-hidden">
            <div className="absolute inset-0 flex items-end justify-center">
                <div className="flex h-auto w-full max-w-full flex-col lg:flex-row gap-4 justify-around items-center lg:items-end p-4">
                    {/* Wrapper to stack blue + yellow */}
                    <div
                        className="relative h-auto lg:h-[700px] w-full"
                        ref={container}
                    >
                        {/* Blue block behind */}
                        <div className="absolute inset-0 z-0 flex flex-col lg:flex-row items-center justify-between lg:pl-10 gap-6">
                            <h1 className="hero-heading text-white text-stroke font-moderna text-4xl sm:text-4xl md:text-8xl">
                                Kalavida&apos;s Atelier
                            </h1>
                            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                                <p className="font-moderna text-black mt-4 lg:mt-40 text-xl sm:text-2xl md:text-3xl text-center sm:text-left">
                                    A collection of moments frozen in art <br />
                                    <span className="block text-[16px] sm:text-[18px] md:text-[22px] max-w-[300px] sm:max-w-[400px]">
                                        By Sourabh Karikatti
                                    </span>
                                </p>
                                <Image
                                    src={mooniBw}
                                    alt="mooni_color"
                                    width={350}
                                    height={300}
                                    className="clip-chamfer-bl w-[250px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-auto"
                                />
                            </div>
                        </div>

                        {/* Yellow block on top */}
                        <div
                            id="yellow-block"
                            className="relative flex flex-col lg:flex-row items-center justify-between lg:pl-10 h-full w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 gap-6"
                        >
                            <h1 className="hero-heading font-moderna text-3xl sm:text-4xl md:text-8xl text-center lg:text-left">
                                Kalavida&apos;s Atelier
                            </h1>
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="font-moderna text-white mt-4 lg:mt-40 text-xl sm:text-2xl md:text-3xl text-center sm:text-left">
                                    A collection of moments frozen in art <br />
                                    <span className="block text-[16px] sm:text-[18px] md:text-[22px] max-w-[300px] sm:max-w-[400px]">
                                        By Sourabh Karikatti
                                    </span>
                                </p>
                                <Image
                                    src={mooniColor}
                                    alt="mooni_color"
                                    width={350}
                                    height={300}
                                    className="clip-chamfer-bl w-[250px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Hero;
