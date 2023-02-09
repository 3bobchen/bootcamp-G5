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
                            src="data:image/png;base64,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"
                            alt="Precedent logo"
                            width="30"
                            height="30"
                            className="mr-2 rounded-sm"
                        ></Image>
                        <p>Wardrobe</p>
                    </Link>
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
                </div>
            </div>
            <main className="flex w-full flex-col items-center justify-center py-32">
                {children}
            </main>
        </>
    );
}
