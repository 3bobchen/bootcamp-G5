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
                {/*<motion.a*/}
                {/*    variants={FADE_DOWN_ANIMATION_VARIANTS}*/}
                {/*    href="https://twitter.com/steventey/status/1613928948915920896"*/}
                {/*    target="_blank"*/}
                {/*    rel="noreferrer"*/}
                {/*    className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"*/}
                {/*>*/}
                {/*    <Twitter className="h-5 w-5 text-[#1d9bf0]" />*/}
                {/*    <p className="text-sm font-semibold text-[#1d9bf0]">*/}
                {/*        Introducing Precedent*/}
                {/*    </p>*/}
                {/*</motion.a>*/}
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
            {/*    <motion.div*/}
            {/*        className="mx-auto mt-6 flex items-center justify-center space-x-5"*/}
            {/*        variants={FADE_DOWN_ANIMATION_VARIANTS}*/}
            {/*    >*/}
            {/*        <a*/}
            {/*            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"*/}
            {/*            href={DEPLOY_URL}*/}
            {/*            target="_blank"*/}
            {/*            rel="noopener noreferrer"*/}
            {/*        >*/}
            {/*            <svg*/}
            {/*                className="h-4 w-4 group-hover:text-black"*/}
            {/*                viewBox="0 0 24 24"*/}
            {/*                fill="currentColor"*/}
            {/*                xmlns="http://www.w3.org/2000/svg"*/}
            {/*            >*/}
            {/*                <path*/}
            {/*                    d="M12 4L20 20H4L12 4Z"*/}
            {/*                    stroke="currentColor"*/}
            {/*                    strokeWidth="2"*/}
            {/*                    strokeLinecap="round"*/}
            {/*                    strokeLinejoin="round"*/}
            {/*                />*/}
            {/*            </svg>*/}
            {/*            <p>Deploy to Vercel</p>*/}
            {/*        </a>*/}
            {/*        <a*/}
            {/*            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"*/}
            {/*            href="https://github.com/steven-tey/precedent"*/}
            {/*            target="_blank"*/}
            {/*            rel="noopener noreferrer"*/}
            {/*        >*/}
            {/*            <Github />*/}
            {/*            <p>Star on GitHub</p>*/}
            {/*        </a>*/}
            {/*    </motion.div>*/}
            </motion.div>
            {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
            <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
                {features.map(({ title, description, demo, large }) => (
                    <Card
                        key={title}
                        title={title}
                        description={description}
                        demo={
                            title === "Beautiful, reusable components" ? (
                                <ComponentGrid />
                            ) : (
                                demo
                            )
                        }
                        large={large}
                    />
                ))}
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
