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

import Creativity from '../public/assets/creativity.png'
import Idea from '../public/assets/idea.png'
import Statistics from '../public/assets/statistics.png'

import Image from "next/image";
import {window} from "rxjs";
export default function Home(auth: { auth: boolean, setAuth: (input: boolean)=>{} }) {
    let element: HTMLElement | null = null
    if (typeof document !== 'undefined') {
        element = document.getElementById("start-of-content")
    }

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
                        Introducing Weardrobe
                    </p>
                </motion.a>
                <motion.h1
                    className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                    {
                        auth.auth ? <Balancer>Hi Caitlin</Balancer> : <Balancer>Same clothes, new fits</Balancer>
                    }
                </motion.h1>
                <motion.p
                    className="mt-6 text-center text-gray-500 md:text-xl"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                        {
                            auth.auth ? <Balancer> An intelligent digital wardrobe to store, view and measure your collection of clothes.</Balancer> : <Balancer>Ready to get the most from the clothes you already have?</Balancer>
                        }
                </motion.p>
            </motion.div>
            {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
            {
                !auth.auth ? <div style={{ zIndex: 200, marginTop: "10vh", width: "100vw", height: "40vh"}}>
                    <div>
                        <div className="mx-auto max-w-7xl pb-24 sm:px-6 sm:pb-32 lg:px-8">
                            <div className="relative isolate overflow-hidden bg-green-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024 1024"
                                    className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                                    aria-hidden="true"
                                >
                                    <circle cx={512} cy={512} r={512} fill="#d9f99d" fillOpacity="0.7" />
                                    <defs>
                                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                            <stop stopColor="#7775D6" />
                                            <stop offset={1} stopColor="#E935C1" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                                        Try Weardrobe today!
                                    </h2>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">
                                        Discover new fits and looks using the clothes you already have!
                                    </p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                        <button onClick={()=> {auth.setAuth(true)}}
                                            className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                        >
                                            Get started
                                        </button>
                                        <button onClick={()=>{ // @ts-ignore
                                            element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}) }} className="text-base font-semibold leading-7 text-white">
                                            Learn why <span aria-hidden="true">↓</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="relative mt-16 h-80 lg:mt-8">
                                    <img
                                        className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                        src="https://www.ikea.com/images/a-person-places-a-shirt-to-hang-at-the-side-of-a-large-white-81d3645af6b39fa14bca93649ec76dfe.jpg"
                                        alt="App screenshot"
                                        width={1824}
                                        height={1080}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem]">
                        Fast fashion is not free. Someone, somewhere is paying.
                    </h2>
                    <div style={{display: "flex", flexDirection: "row", width: "100vw", justifyContent: "center", marginTop: "2rem", marginBottom: "2rem", gap: "5rem"}}>
                        <div style={{backgroundColor: "white", padding: "2rem", borderRadius:"2rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <Image src={Factory} alt={""} style={{width: "15rem", margin: "auto"}}/>
                            <p style={{maxWidth: "20rem", textAlign: "center", padding: "2rem 0", fontWeight: "700"}}>Fashion contributes to 10% of global greenhouse emissions</p>
                        </div>
                        <div style={{backgroundColor: "white", padding: "2rem", borderRadius:"2rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <Image src={Water} alt={""} style={{width: "15rem", margin: "auto"}}/>
                            <p style={{maxWidth: "20rem", textAlign: "center", padding: "2rem 0", fontWeight: "700"}}>Fashion contributes to 20% of global wastewater</p>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", width: "100vw", justifyContent: "center", marginTop: "2rem", marginBottom: "2rem", gap: "5rem"}}>
                        <div style={{backgroundColor: "white", padding: "2rem", borderRadius:"2rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <Image src={Clothes} alt={""} style={{width: "15rem", margin: "auto"}}/>
                            <p style={{maxWidth: "20rem", textAlign: "center", padding: "2rem 0", fontWeight: "700"}}>53 Million tonnes of clothing are incinerated or go to landfill each year</p>
                        </div>
                        <div id="start-of-content" style={{backgroundColor: "white", padding: "2rem", borderRadius:"2rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <Image src={Number15} alt={""} style={{width: "15rem", margin: "auto"}}/>
                            <p style={{maxWidth: "20rem", textAlign: "center", padding: "2rem 0", fontWeight: "700"}}>Each Australian buys 15KG of clothes per year</p>
                        </div>
                    </div>
                    <h2  style={{marginTop: "4rem"}} className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem]">
                        Buy less. Choose well.
                    </h2>
                    <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem]">
                        Make it last. Make it fresh.
                    </h2>
                    <div style={{display: "flex", flexDirection: "row", width: "100vw", justifyContent: "center", marginTop: "2rem", marginBottom: "2rem", gap: "5rem"}}>
                        <div style={{width: "22rem", backgroundColor: "white", padding: "2rem", borderRadius:"2rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <Image src={Creativity} alt={""} style={{width: "15rem", margin: "auto"}}/>
                            <p style={{maxWidth: "20rem", textAlign: "center", padding: "2rem 0", fontWeight: "700"}}>Know what is in your wardrobe</p>
                        </div>
                        <div style={{width: "22rem",backgroundColor: "white", padding: "2rem", borderRadius:"2rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <Image src={Statistics} alt={""} style={{width: "15rem", margin: "auto"}}/>
                            <p style={{maxWidth: "20rem", textAlign: "center", padding: "2rem 0", fontWeight: "700"}}>Understand how you use your wardrobe</p>
                        </div>
                        <div style={{width: "22rem",backgroundColor: "white", padding: "2rem", borderRadius:"2rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <Image src={Idea} alt={""} style={{width: "15rem", margin: "auto"}}/>
                            <p style={{maxWidth: "20rem", textAlign: "center", padding: "2rem 0", fontWeight: "700"}}>Be inspired as to how you can wear your wardrobe better</p>
                        </div>
                    </div>
                    <div>
                        <div className="mx-auto max-w-7xl pb-24 sm:px-6 sm:pb-32 lg:px-8">
                            <div className="relative isolate overflow-hidden bg-green-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024 1024"
                                    className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                                    aria-hidden="true"
                                >
                                    <circle cx={512} cy={512} r={512} fill="#d9f99d" fillOpacity="0.7" />
                                    <defs>
                                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                            <stop stopColor="#7775D6" />
                                            <stop offset={1} stopColor="#E935C1" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                                        Add your wardrobe
                                    </h2>

                                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                        <button onClick={()=> {auth.setAuth(true)}}
                                                className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                        >
                                            Get started
                                        </button>
                                    </div>
                                </div>
                                <div className="relative mt-16 h-80 lg:mt-8">

                                </div>

                            </div>
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
            <a href={'/inspiration'}>
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
