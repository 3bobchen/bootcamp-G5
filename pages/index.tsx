import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import {motion} from "framer-motion";
import {FADE_DOWN_ANIMATION_VARIANTS} from "@/lib/constants";
import {Twitter} from "@/components/shared/icons";
import ComponentGrid from "@/components/home/component-grid";

import Factory from '../public/assets/factory.png'
import Water from '../public/assets/water.png'
import Clothes from '../public/assets/clothes-rack.png'
import Number15 from '../public/assets/number-15.png'
import Image from "next/image";
export default function Home(auth: { auth: boolean }) {
    return (
        <>
            <motion.div
                className="max-w-xl px-5 xl:px-0"
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{once: true}}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                <motion.a
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    href="https://twitter.com/steventey/status/1613928948915920896"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
                >
                    <Twitter className="h-5 w-5 text-[#1d9bf0]"/>
                    <p className="text-sm font-semibold text-[#1d9bf0]">
                        Introducing Wardrobe
                    </p>
                </motion.a>
                <motion.h1
                    className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    <Balancer>What is in your wardrobe?</Balancer>
                </motion.h1>
                <motion.p
                    className="mt-6 text-center text-gray-500 md:text-xl"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    <Balancer>
                        An intelligent digital wardrobe to store, view and measure your collection of clothes.
                    </Balancer>
                </motion.p>
            </motion.div>
            {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
            {
                !auth.auth ? <div style={{ zIndex: 200, marginTop: "10vh", width: "100vw", height: "40vh"}}>
                    <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem]">
                        Fast fashion is not free. Someone, somewhere is paying.
                    </h2>
                    <div style={{display: "flex", flexDirection: "row", width: "100vw", justifyContent: "center", marginTop: "2rem", marginBottom: "2rem", gap: "5rem"}}>
                        <div style={{backgroundColor: "white", padding: "2rem", borderRadius:"2rem"}}>
                            <Image src={Factory} alt={""} style={{width: "15rem", margin: "auto"}}/>
                            <p style={{maxWidth: "20rem", textAlign: "center", padding: "2rem 0", fontWeight: "700"}}>Fashion contributes to 10% of global greenhouse emissions</p>
                        </div>
                        <div style={{backgroundColor: "white", padding: "2rem", borderRadius:"2rem"}}>
                            <Image src={Water} alt={""} style={{width: "15rem", margin: "auto"}}/>
                            <p style={{maxWidth: "20rem", textAlign: "center", padding: "2rem 0", fontWeight: "700"}}>Fashion contributes to 20% of global wastewater</p>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", width: "100vw", justifyContent: "center", marginTop: "2rem", marginBottom: "2rem", gap: "5rem"}}>
                        <div style={{backgroundColor: "white", padding: "2rem", borderRadius:"2rem"}}>
                            <Image src={Clothes} alt={""} style={{width: "15rem", margin: "auto"}}/>
                            <p style={{maxWidth: "20rem", textAlign: "center", padding: "2rem 0", fontWeight: "700"}}>53 Million tonnes of clothing are incinerated or go to landfill each year</p>
                        </div>
                        <div style={{backgroundColor: "white", padding: "2rem", borderRadius:"2rem"}}>
                            <Image src={Number15} alt={""} style={{width: "15rem", margin: "auto"}}/>
                            <p style={{maxWidth: "20rem", textAlign: "center", padding: "2rem 0", fontWeight: "700"}}>Each Australian buys 15KG of clothes per year</p>
                        </div>
                    </div>
                    <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem]">
                        Buy less. Choose well. Make it last. Make it fresh.
                    </h2>
                    <div style={{display: "flex", flexDirection: "row", width: "100vw", justifyContent: "center", marginTop: "2rem", marginBottom: "2rem", gap: "5rem"}}>
                        <div>
                            <Image src={Factory} alt={""} style={{width: "15rem"}}/>
                            <p>Fashion contributes to 10% off global greenhouse emissions</p>
                        </div>
                        <div>
                            <Image src={Water} alt={""} style={{width: "15rem"}}/>
                            <p>Fashion contributes to 10% off global greenhouse emissions</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={Clothes} alt={""} style={{width: "15rem"}}/>
                            <p>Fashion contributes to 10% off global greenhouse emissions</p>
                        </div>
                        <div>
                            <Image src={Number15} alt={""} style={{width: "15rem"}}/>
                            <p>Fashion contributes to 10% off global greenhouse emissions</p>
                        </div>
                    </div>
                </div> : (
                    <div
                        className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
                        {features.map(({title, description, demo}) => (
                            <Card
                                key={title}
                                title={title}
                                description={description}
                                demo={
                                    title === "Beautiful, reusable components" ? (
                                        <ComponentGrid/>
                                    ) : (
                                        demo
                                    )
                                }
                                large={false}
                            />
                        ))}
                    </div>
                )
            }
        </>
    );
}

const features = [
    {
        title: "Collections",
        description:
            "Jump to view and edit your wardrobe inventory.",
        demo: (
            <a href={'/wardrobe'}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1422/1422161.png"
                    alt="Deploy with Vercel"
                    width={120}
                />
            </a>
        ),
    },
    {
        title: "Metrics",
        description:
            "Jump to view and edit your wardrobe inventory.",
        demo: (
            <a href={'/metrics'}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1340/1340105.png"
                    alt="Deploy with Vercel"
                    width={120}
                />
            </a>
        ),
    },
    {
        title: "Inspiration",
        description:
            "Jump to view and edit your wardrobe inventory.",
        demo: (
            <a href={'/wardrobe'}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/33/33308.png"
                    alt="Deploy with Vercel"
                    width={120}
                />
            </a>
        ),
    },
];
