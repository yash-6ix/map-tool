import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import jsondata from '@/utlis/webcopy.json';

const Link = styled.p<{ $primary?: boolean; }>`
    color: #A7D500;
    font-family: KievitOT;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.06px;
    text-decoration-line: underline;
`;

const Text = styled.p`
    color: #FFF;
    /* Subtitle 2 */
    font-family: KievitOT;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.06px;

    @media (max-width: 576px) { /* Change the value based on your desired breakpoint */
        font-size: 16px; /* Change the font size for smaller devices */
        letter-spacing:0.04px
    }
`

export default function Footer() {
    const [lang, setLang] = useState("en");
    const router = useRouter()
    const langData = jsondata as any;
    useEffect(() => {
        if(router.query.lang){
          setLang(router.query.lang as string)
        }
      },[router])
    return (
        <>
        <div className="w-full py-8 px-4 md:py-20 md:px-40 bg-lime-800">
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec viverra ipsum. Mauris augue magna, dignissim ut nisl et, egestas accumsan elit. 
            </Text>
            <div className="w-full flex justify-between mt-12 md:mt-20">
                <div className='flex flex-col gap-y-1'>
                    <Link>{langData[lang].aboutus}</Link>
                    <Link>{langData[lang].contactus}</Link>
                    <Link>{langData[lang].termsofuse}</Link>
                </div>
                <div className='flex'>
                    <Image
                        src="/images/logo-dark.svg"
                        alt="MAP Logo"
                        className="dark:invert mt-auto"
                        width={161}
                        height={55}
                        priority
                    />
                </div>
            </div>
        </div>
        </>
    )
}