"use client"

import React, { useState } from "react"
import SecondText from "./secondtext"
import SwitchButton from "./switchbtn"

const QuestionCard: React.FC<{description:string, status:boolean}> = ({description, status}) => {

    const [selected, setSelect] = useState(status)
    const changeStatus = () => {
        setSelect(!selected)
    }
    return (
    <div className={`w-full bg-[color:var(--tertiary-accent-sand)] px-12 py-6 flex justify-between rounded-3xl border-4 ${selected ? 'border-lime-400' : 'border-[color:var(--tertiary-accent-sand)]'}`}>
        <div className='max-w-xl my-auto flex h-36 text-left'>
          <SecondText>
            {description}
          </SecondText>
        </div>
        <div className='my-auto'>
          <SwitchButton active={selected} onChange={changeStatus} />
        </div>
    </div>
    )
}


export default QuestionCard