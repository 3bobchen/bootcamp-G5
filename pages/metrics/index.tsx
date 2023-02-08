import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import {useState} from "react";

export default function Home() {
    const [auth, setAuth] = useState(false)
    return (
        <Layout>
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
                    <Balancer>Impacts and Metrics</Balancer>
                </motion.h1>
                <motion.p
                    className="mt-6 text-center text-gray-500 md:text-xl"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    <Balancer>
                        See your trends and wardrobe habits and see the impact your wardrobe has on the planet.
                    </Balancer>
                </motion.p>

            </motion.div>
            {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
            {/*<div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">*/}
            {/*    {features.map(({ title, description, demo }) => (*/}
            {/*        <Card*/}
            {/*            key={title}*/}
            {/*            title={title}*/}
            {/*            description={description}*/}
            {/*            demo={*/}
            {/*                title === "Beautiful, reusable components" ? (*/}
            {/*                    <ComponentGrid />*/}
            {/*                ) : (*/}
            {/*                    demo*/}
            {/*                )*/}
            {/*            }*/}
            {/*            large={false}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div style={{zIndex: 200}}>
                <div>
                    <h2>Personal Style</h2>
                    <div>
                        <div>
                            <h3>minimalist</h3>
                            <img src="https://picsum.photos/200" alt="empty"/>
                            <p> the environment is really under duress</p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/200" alt="empty"/>
                            <h3>hello</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

const features = [
    // {
    //     title: "Beautiful, reusable components",
    //     description:
    //         "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
    //     large: true,
    // },
    {
        title: "Different",
        description:
            "items worn in the last week.",
        demo: <WebVitals number={23}/>,
    },
    {
        title: "Most",
        description:
            "times a piece was worn.",
        demo: <WebVitals number={5}/>,
    },
    {
        title: "Pieces",
        description:
            "you wore for the first time.",
        demo: <WebVitals number={2}/>,
    },
    {
        title: "Color",
        description:
            "you wore the most often.",
        demo: (
            <a href={DEPLOY_URL}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Oxford_blue.png"
                    alt="Deploy with Vercel"
                    width={120}
                />
            </a>
        ),
    },
    {
        title: "275L",
        description:
            "of water saved over lifetime.",
        demo: (
            <a href={DEPLOY_URL}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://t3.ftcdn.net/jpg/04/18/36/08/360_F_418360847_Cb8naIISAo7bYi8dSSJjIKxrevFgZoZb.jpg"
                    alt="Deploy with Vercel"
                    width={120}
                />
            </a>
        ),
    },{
        title: "Summer",
        description:
            "was the season of clothes you wore the most.",
        demo: (
            <a href={DEPLOY_URL}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://www.onlygfx.com/wp-content/uploads/2022/03/sun-clipart-set-5.png"
                    alt="Deploy with Vercel"
                    width={120}
                />
            </a>
        ),
    },
];
