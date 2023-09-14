import Image from "next/image";
import React, { useState } from "react"
import SmoothCollapse from "react-smooth-collapse";
import styled from "styled-components";

const Title = styled.h1<{ $primary?: boolean; }>`
    color: ${props => props.$primary ? "#FFF" : "#53565A"};
    font-family: KievitOT;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.06px;
`;

const Text = styled.p`
    color: #53565A;
    /* Subtitle 2 */
    font-family: KievitOT;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.06px;
`

const Transition = styled.div`
    transition: height 2s, height 4s;
`

const Collapse: React.FC<{title:string, description:string, keyProp?:string}> = ({title, description, keyProp}) => {
    const [isOpen, setOpen] = useState(false)

    const changeStatus = () => {
        setOpen(!isOpen)
    }

    return (
        <div key={keyProp} className="bg-white rounded-xl w-full">
            <div className={`flex w-full rounded-xl border border-zinc-600 ps-12 pe-6 py-4 justify-between ${isOpen&&"bg-zinc-600"}`}>
                <Title className="my-auto" $primary={isOpen}>{title}</Title>
                {
                    isOpen?
                    <Image
                        src="/images/age-arrow-up.svg"
                        alt="Arrow Up Icon"
                        className="dark:invert cursor-pointer"
                        width={48}
                        height={48}
                        onClick={changeStatus}
                        priority
                    />
                    :
                    <Image
                        src="/images/age-arrow-down.svg"
                        alt="Arrow Up Icon"
                        className="dark:invert cursor-pointer"
                        width={48}
                        height={48}
                        onClick={changeStatus}
                        priority
                    />
                }
 
            </div>
            <SmoothCollapse expanded={isOpen}>
                <div className="px-12 py-8">
                    <Text>{description}</Text>
                </div>
            </SmoothCollapse>
        </div>
    )
}

export default Collapse