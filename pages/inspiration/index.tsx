import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import React, {useState} from "react";
import {TextField} from "@mui/material";
import SettingsCheckboxesGroup from "@/components/shared/checkboxes/Checkboxes";

export default function Inspiration() {
    const [auth, setAuth] = useState(false)
    return (
        <Layout setAuth={setAuth} auth={auth}>
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
                    <Balancer>Outfit of the day</Balancer>
                </motion.h1>
                <motion.p
                    className="mt-6 text-center text-gray-500 md:text-xl"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    <Balancer>
                        Inspiration on what outfits you could wear based on contextual information and the contents of your wardrobe.
                    </Balancer>
                </motion.p>
            </motion.div>
            <div style={{display: "flex", flexDirection: "column", marginTop: "2rem"}}>
                <div style={{ display: "flex", flexDirection: "column", gap: "30px"}}>
                    <TextField style={{height: "20px", width: "70vw"}} variant="filled" label="Where are you going today?" />
                    <p>Enter the city </p>
                    <TextField variant="filled" label="What sort off vibe are you looking for?" />
                </div>
                <SettingsCheckboxesGroup/>
            </div>
        </Layout>
    );
}
