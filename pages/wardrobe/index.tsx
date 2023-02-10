
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Image from 'next/image'

import SNOWB1 from '../../public/assets/clothes/SNOWBOTTOM1.jpeg'
import SNOWB2 from '../../public/assets/clothes/SNOWBOTTOM2.jpeg'
import SNOWT1 from '../../public/assets/clothes/SNOWTOP1.webp'
import SNOWT2 from '../../public/assets/clothes/SNOWTOP2.webp'
import SUMMERB1 from '../../public/assets/clothes/SUMMERBOTTOM1.jpeg'
import SUMMERT1 from '../../public/assets/clothes/SUMMERTOP1.webp'
import SUMMERT2 from '../../public/assets/clothes/SUMMERTOP2.jpeg'
import DottiDress from '../../public/assets/clothes/dottidress.jpg'
import SquaresTop from '../../public/assets/clothes/squarecheckeredcrop.jpg'
import FeatheredDress from '../../public/assets/clothes/featherdress.jpg'


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
                <a style={{display: "flex", width: "7rem", marginTop: "2rem", justifyContent: "center", margin: "auto", backgroundColor: "#000", padding: "1rem", borderRadius: "1rem", color: "white"}} href={"/uploadform"}>
                    Add Item
                </a>
                <div style={{width: "80%", margin: "auto"}}>
                            <>
                                <h2 style={{display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>Tops</h2>
                                <div style={{margin: "1rem 0", display: "grid", gridTemplateColumns: "30vw 30vw 30vw"}}>
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
                                    <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                                        <Image src={DottiDress} alt={""} width={300} height={300}/>
                                        <p style={{fontSize:"1.5rem"}}><b>Dotti Dress</b></p>
                                        <p>Size M</p>
                                        <p>$70</p>
                                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                                    </div>
                                    <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                                        <Image src={FeatheredDress} alt={""} width={500} height={300}/>
                                        <p style={{fontSize:"1.5rem"}}><b>Feather Dress</b></p>
                                        <p>Size M</p>
                                        <p>$70</p>
                                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                                    </div>
                                    <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                                        <Image src={SUMMERT1} alt={""} width={500} height={300}/>
                                        <p style={{fontSize:"1.5rem"}}><b>Dotted Shirt</b></p>
                                        <p>Size M</p>
                                        <p>$40</p>
                                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                                    </div>
                                    <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                                        <Image src={SUMMERT2} alt={""} width={500} height={300}/>
                                        <p style={{fontSize:"1.5rem"}}><b>Polkadot Blouse</b></p>
                                        <p>Size M</p>
                                        <p>$40</p>
                                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                                    </div>
                                    <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                                        <Image src={SquaresTop} alt={""} width={500} height={300}/>
                                        <p style={{fontSize:"1.5rem"}}><b>Squares Top</b></p>
                                        <p>Size M</p>
                                        <p>$40</p>
                                        <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                                    </div>
                                </div>
                            </>

                </div>
                <div style={{width: "80%", margin: "auto"}}>
                    <h2 style={{display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>Bottoms</h2>
                    <div style={{margin: "1rem 0", display: "grid", gridTemplateColumns: "30vw 30vw 30vw"}}>
                        <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <Image src={SNOWB1} alt={""} width={300} height={300}/>
                            <p style={{fontSize:"1.5rem"}}><b>Ski Pants</b></p>
                            <p>Size M</p>
                            <p>$120</p>
                            <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                        </div>
                        <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <Image src={SUMMERB1} alt={""} width={300} height={300}/>
                            <p style={{fontSize:"1.5rem"}}><b>Black Pants</b></p>
                            <p>Size M</p>
                            <p>$80</p>
                            <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                        </div>
                    </div>
                </div>
                <div style={{width: "80%", margin: "auto"}}>
                    <h2 style={{display: "flex", fontSize: "3rem", justifyContent: "flex-start"}}>Shoes</h2>
                    <div style={{margin: "1rem 0", display: "grid", gridTemplateColumns: "30vw 30vw 30vw"}}>
                        <div style={{marginBottom: "5rem", width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <img src={"https://i8.amplience.net/i/jpl/jd_FW0FW05152YBR_C_0010_a?qlt=92&w=950&h=673&v=1&fmt=auto"} alt={""} width={300} height={300}/>
                            <p style={{fontSize:"1.5rem"}}><b>Tommy Hilfiger Fur Slides</b></p>
                            <p>Size 7</p>
                            <p>$90</p>
                            <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                        </div>
                        <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <img src={"https://i8.amplience.net/i/jpl/jd_DD1503-001_C_0004_a?qlt=92&w=950&h=673&v=1&fmt=auto"} alt={""} width={300} height={300}/>
                            <p style={{fontSize:"1.5rem"}}><b>Nike Dunk Low 'Atmosphere Pink'</b></p>
                            <p>Size 7.5</p>
                            <p>$160</p>
                            <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                        </div>
                        <div style={{marginBottom: "5rem",width: "20rem", gap: "0.5rem", padding: "2rem", borderRadius: "2rem", backgroundColor: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                            <img src={"https://i8.amplience.net/i/jpl/jd_059932_a?qlt=92&w=950&h=673&v=1&fmt=auto"} alt={""} width={300} height={300}/>
                            <p style={{fontSize:"1.5rem"}}><b>Timberland 6" Premium Boot</b></p>
                            <p>Size 7</p>
                            <p>$345</p>
                            <button style={{backgroundColor: "#000", color: "#FFF", padding: "0.6rem", borderRadius: "1rem"}}>See More</button>
                        </div>
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
        </>
    );
}

