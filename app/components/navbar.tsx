import Image from "next/image";
import LanguageButton from "./langbtn";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [lang, setLang] = useState("en");
    const router = useRouter()
    const pathname = usePathname()
    useEffect(() => {
        if(router.query.age){
            router.push(`${pathname}?lang=${lang}`);
        }
      }, [lang, router.query.age])
    return (
        <>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mx-12 mt-12">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        src="/images/logo.svg"
                        alt="MAP Logo"
                        className="dark:invert"
                        width={161}
                        height={55}
                        priority
                    />
                    </a>
                </div>
                <div className="fixed left-0 top-0 flex w-full justify-center from-zinc-200 pb-6 pt-8 lg:static lg:w-auto lg:p-4">
                    <LanguageButton text={"en"} active={lang == "en" ? true : false} changeLanguage={setLang}/>
                    <span className="my-auto px-1 text-lg">/</span>
                    <LanguageButton text={"fr"} active={lang == "fr" ? true : false} changeLanguage={setLang}/>
                </div>
            </div>
        </>
    )
}