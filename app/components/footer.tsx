import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

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
`

export default function Footer() {
    return (
        <>
        <div className="w-full py-20 px-40 bg-lime-800">
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec viverra ipsum. Mauris augue magna, dignissim ut nisl et, egestas accumsan elit. 
            </Text>
            <div className="w-full flex justify-between mt-20">
                <div className='flex flex-col gap-y-1'>
                    <Link>About us</Link>
                    <Link>Contact us</Link>
                    <Link>Terms of use</Link>
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