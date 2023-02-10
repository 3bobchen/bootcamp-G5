import {FADE_IN_ANIMATION_SETTINGS} from "@/lib/constants";
import {AnimatePresence, motion} from "framer-motion";
import {useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {Dispatch, ReactNode, SetStateAction} from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import UserDropdown from "./user-dropdown";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";

import Logo from '../../public/assets/blacklogo.png'

export default function Layout({
                                   meta,
                                   children, setAuth, auth
                               }: {
    meta?: {
        title?: string;
        description?: string;
        image?: string;
    };
    children: ReactNode;
    setAuth: Dispatch<SetStateAction<boolean>>
    auth: boolean
}) {
    const {data: session, status} = useSession();
    const scrolled = useScroll(50);
    const router = useRouter()
    return (
        <>
            <Meta {...meta} />
            <div className="fixed h-screen w-full bg-gradient-to-br from-green-500 via-white to-green-50"/>
            <div
                style={{zIndex: "400"}}
                className={`fixed top-0 w-full ${
                    scrolled
                        ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
                        : "bg-white/0"
                } z-30 transition-all`}
            >
                <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
                    <Link href="/" className="flex items-center font-display text-2xl">
                        <Image
                            src={Logo}
                            alt="Precedent logo"
                            width="300"
                            height="100"
                            className="mr-2 rounded-sm"
                            style={{height: "1rem", width: "10rem"}}
                        ></Image>
                    </Link>
                    {
                        router.pathname === '/' ? (
                            <div>
                                {
                                    auth ? (
                                        <AnimatePresence>
                                            <motion.button
                                                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                                                onClick={() => {
                                                    Auth.signOut().then(() => {setAuth(false)});
                                                }}
                                                {...FADE_IN_ANIMATION_SETTINGS}
                                            >
                                                Sign Out
                                            </motion.button>
                                        </AnimatePresence>
                                    ) : (
                                        <AnimatePresence>
                                            {!session && status !== "loading" ? (
                                                <motion.button
                                                    className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                                                    onClick={() => {
                                                        router.push("/login")
                                                    }}
                                                    {...FADE_IN_ANIMATION_SETTINGS}
                                                >
                                                    Get Started
                                                </motion.button>
                                            ) : (
                                                <UserDropdown/>
                                            )}
                                        </AnimatePresence>
                                    )
                                }
                            </div>

                        ) : null
                    }
                </div>
            </div>
            <main className="flex w-full flex-col items-center justify-center py-32">
                {children}
            </main>
        </>
    );
}
