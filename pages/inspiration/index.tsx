
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import React, {useState} from "react";
import {TextField} from "@mui/material";
import SettingsCheckboxesGroup from "@/components/shared/checkboxes/Checkboxes";
import Image from 'next/image'

import SummerT1 from '../../public/assets/clothes/SUMMERTOP1.webp'
import SummerT2 from '../../public/assets/clothes/SUMMERTOP2.jpeg'
import SummerB1 from '../../public/assets/clothes/SUMMERBOTTOM1.jpeg'

import WinterT1 from '../../public/assets/clothes/SNOWTOP1.webp'
import WinterT2 from '../../public/assets/clothes/SNOWTOP2.webp'
import WinterB1 from '../../public/assets/clothes/SNOWBOTTOM1.jpeg'
import WinterB2 from '../../public/assets/clothes/SNOWBOTTOM2.jpeg'
import SNOWT1 from "../../public/assets/clothes/SNOWTOP1.webp";
import SNOWT2 from "../../public/assets/clothes/SNOWTOP2.webp";
import SNOWB1 from "../../public/assets/clothes/SNOWBOTTOM1.jpeg";
const SydneyDemo = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", marginTop: "2rem", zIndex: 200}}>
            <div style={{backgroundColor: "#EFEFEF", padding: "2rem", borderRadius: "1rem", margin: "2rem 0", maxWidth: "70vw"}}>
                The weather in Sydney will peak at 26 degrees today with rain unlikely. I have given recommendations for Work/Office style clothing on a mild sunny day. You have also added the additional vibe spotty.
            </div>
            <div style={{width: "100%", margin: "auto"}}>
                <h2 style={{display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>Tops</h2>
                <div style={{margin: "1rem 0", display: "flex", gap:"3rem", flexDirection: "row"}}>
                    <div style={{width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                        <Image src={SummerT1} alt={""} width={500} height={300}/>
                        <p style={{fontSize:"1.5rem"}}><b>Polkadot Shirt</b></p>
                        <p>Size M</p>
                        <p>$45</p>
                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>More about this item</button>
                    </div>
                    <div style={{width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                        <Image src={SummerT2} alt={""} width={500} height={300}/>
                        <p style={{fontSize:"1.5rem"}}><b>Spotted Shirt</b></p>
                        <p>Size M</p>
                        <p>$26</p>
                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>More about this item</button>
                    </div>
                </div>
            </div>
            <div style={{width: "100%", margin: "auto"}}>
                <h2 style={{display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>Bottoms</h2>
                <div style={{margin: "1rem 0", display: "flex", gap:"3rem", flexDirection: "row"}}>
                    <div style={{width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                        <Image src={SummerB1} alt={""} width={300} height={300}/>
                        <p style={{fontSize:"1.5rem"}}><b>Nike Tee Shirt</b></p>
                        <p>Size M</p>
                        <p>$45</p>
                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>More about this item</button>
                    </div>
                </div>
            </div>
            <div style={{width: "100%", margin: "auto"}}>
                <h2 style={{display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>Shoes</h2>
                <div style={{margin: "1rem 0", display: "flex", gap:"3rem", flexDirection: "row"}}>
                    <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                        <img src={"https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/20/203/1116/100/7/978816430/978816430_1_720x928.webp"} alt={""} width={300} height={300}/>
                        <p style={{fontSize:"1.5rem"}}><b>Isabella Heeled Shoe in Black</b></p>
                        <p>Size 7</p>
                        <p>$127</p>
                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                    </div>
                    <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                        <img src={"https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/20/210/1131/102/4/965656450/965656450_1_720x928.webp"} alt={""} width={300} height={300}/>
                        <p style={{fontSize:"1.5rem"}}><b>Melvin Flat Shoes In Winter in White Leather</b></p>
                        <p>Size 7</p>
                        <p>$127</p>
                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                    </div>
                    <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                        <img src={"https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/20/201/1138/487/2/953592310/953592310_1_720x928.webp"} alt={""} width={300} height={300}/>
                        <p style={{fontSize:"1.5rem"}}><b>Lanette Leather Pump</b></p>
                        <p>Size 7</p>
                        <p>$179</p>
                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BanffDemo = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", marginTop: "2rem", zIndex: 200}}>
            <div style={{backgroundColor: "#EFEFEF", padding: "2rem", borderRadius: "1rem", margin: "2rem 0", maxWidth: "70vw"}}>
                The weather in Banff will peak at 1 degree today with rain unlikely though there will be wind. I have given recommendations for Active style clothing on a cold day.
            </div>
            <div style={{width: "100%", margin: "auto"}}>
                <h2 style={{display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>Tops</h2>
                <div style={{margin: "1rem 0", display: "flex", gap:"3rem", flexDirection: "row"}}>
                    <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    <Image src={SNOWT1} alt={""} width={300} height={300}/>
                    <p style={{fontSize:"1.5rem"}}><b>Patagonia Synchila Jacket</b></p>
                    <p>Size M</p>
                    <p>$249</p>
                    <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                </div>
                <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    <Image src={SNOWT2} alt={""} width={300} height={300}/>
                    <p style={{fontSize:"1.5rem"}}><b>Snow Puffer</b></p>
                    <p>Size M</p>
                    <p>$199</p>
                    <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                </div>
                </div>
            </div>
            <div style={{width: "100%", margin: "auto"}}>
                <h2 style={{display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>Bottoms</h2>
                <div style={{margin: "1rem 0", display: "flex", gap:"3rem", flexDirection: "row"}}>
                    <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                        <Image src={SNOWB1} alt={""} width={300} height={300}/>
                        <p style={{fontSize:"1.5rem"}}><b>Ski Pants</b></p>
                        <p>Size M</p>
                        <p>$120</p>
                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                    </div>
                </div>
            </div>
            <div style={{width: "100%", margin: "auto"}}>
                <h2 style={{display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>Shoes</h2>
                <div style={{margin: "1rem 0", display: "flex", gap:"3rem", flexDirection: "row"}}>
                    <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                        <img src={"https://i8.amplience.net/i/jpl/jd_059932_a?qlt=92&w=950&h=673&v=1&fmt=auto"} alt={""} width={300} height={300}/>
                        <p style={{fontSize:"1.5rem"}}><b>Timberland 6" Premium Boot</b></p>
                        <p>Size 7</p>
                        <p>$345</p>
                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Inspiration() {
    const [city, setCity] = useState('')
    const [showSydney, setShowSydeny] = useState(false)
    const [showBanff, setShowBanff] = useState(false)
    function showResults() {
        if (city === "Sydney") {
            setShowSydeny(true)
            setShowBanff(false)
            return
        }
        if (city === "Banff") {
            setShowBanff(true)
            setShowSydeny(false)
            return
        }
        setShowSydeny(false)
        setShowBanff(false)
    }
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
            <div style={{display: "flex", flexDirection: "column", marginTop: "2rem", zIndex: 200}}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px"}}>
                    <TextField style={{height: "20px", width: "70vw"}} variant="filled" label="Where are you going today?" onChange={(e)=> {setCity(e.target.value)}}/>
                    <p style={{marginTop: "1rem", fontSize: "0.5rem"}}>* Location data required to fetch weather and advise on outfit inspirations.</p>
                    <TextField variant="filled" label="What sort off vibe are you looking for?" />
                </div>
                <SettingsCheckboxesGroup/>
                <button style={{backgroundColor: "black", padding: "0.5rem", color: "white", borderRadius: "1rem"}} onClick={()=> {showResults()}}>Generate</button>
            </div>
            {
                showSydney ? <SydneyDemo/> : null
            }
            {
                showBanff ? <BanffDemo/> : null
            }
        </>
    );
}
