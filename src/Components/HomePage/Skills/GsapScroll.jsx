"use client"


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import MobingCard from "./MobingCard";

gsap.registerPlugin(ScrollTrigger);

const GsapScroll = () => {

    useEffect(() => {
        const textWrappers = document.querySelectorAll(".your-text-wrapper-class")

        const pinTrigger = ScrollTrigger.create({
            trigger: ".content-wrapper",
            pin: true,
            start: "top top",
            end: "+=5%",
        });

        let tl = gsap.timeline();

        tl.to(textWrappers, {
            x: "-300%",
            scrollTrigger: {
                start: () => pinTrigger?.start,
                end: () => pinTrigger?.end,
                scrub: 2,
            }
        })

        return () => {
            pinTrigger?.kill();
            tl.kill();
        }
    })

    return (
        <div>
            <div className="content-wrapper">
                {/* Your component content */}
                <div className="your-text-wrapper-class ">
                    {/* Your text content */}
                    <div>
                        <MobingCard></MobingCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GsapScroll;