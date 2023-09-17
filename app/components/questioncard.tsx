"use client"

import React, { useState } from "react"
import SecondText from "./secondtext"
import SwitchButton from "./switchbtn"

const QuestionCard: React.FC<{description:string, yes:string, no:string}> = ({description, yes, no}) => {

    const [selected, setSelect] = useState(false)
    const changeStatus = () => {
        setSelect(!selected)
    }
    return (
    <div className={`w-full bg-[color:var(--tertiary-accent-sand)] px-4 py-2 md:px-12 md:py-6 flex justify-between rounded-3xl border-4 ${selected ? 'border-lime-400' : 'border-[color:var(--tertiary-accent-sand)]'}`}>
        <div className='max-w-xl my-auto flex h-36 text-left'>
          <SecondText>
            {description}
          </SecondText>
        </div>
        <div className='my-auto'>
          <SwitchButton active={selected} onChange={changeStatus} yes={yes} no={no} />
        </div>
    </div>
    )
}


export default QuestionCard