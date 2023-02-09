import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import {useState} from "react";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <motion.div
                className="max-w-xl px-5 xl:px-0"
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                <motion.h1
                    className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    <Balancer>My Wardrobe</Balancer>
                </motion.h1>
                <motion.p
                    className="mt-6 text-center text-gray-500 md:text-xl"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    <Balancer>
                        Add your collection of clothing items here
                    </Balancer>
                </motion.p>
            </motion.div>

            <div style={{position: "relative", zIndex: 200, width: "100vw"}}>
                <div style={{width: "80%", margin: "auto"}}>
                    <h2 style={{display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>Tops</h2>
                    <div style={{margin: "1rem 0"}}>
                        <div style={{width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <img src={"https://picsum.photos/200"} alt={""} width={300} height={300}/>
                            <p style={{fontSize:"1.5rem"}}><b>Nike Tee Shirt</b></p>
                            <p>Size M</p>
                            <p>$45</p>
                            <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

