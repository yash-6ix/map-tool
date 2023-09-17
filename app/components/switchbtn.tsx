'use client'

import React, { useState } from 'react';
import styled from 'styled-components';
import Switch from "react-switch";

const Text = styled.h3<{ $primary?: boolean; }>`
    color: ${props => props.$primary ? "#2B4E17" : "#FFF"};
    font-family: 'KievitOT';
    font-size: 25.5px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.064px;
    @media (max-width: 576px) { /* Change the value based on your desired breakpoint */
        font-size: 16px; /* Change the font size for smaller devices */
        letter-spacing:0.04px;
    }
`

const ButtonWrapper = styled.div<{ $primary?: boolean; }>`
    background: ${props => props.$primary ? "#A7D500" : "#53565A"};
`


const SwitchButton: React.FC<{active: boolean, onChange:()=>void, yes:string, no:string }> = ({active, onChange, yes, no}) => {

  return (
    <>
        <Switch
            checked={active}
            onChange={onChange}
            handleDiameter={28}
            offColor="#53565A"
            onColor="#A7D500"
            height={40}
            width={80}
            activeBoxShadow="0px 0px 1px 2px #fffc35"
            uncheckedIcon={
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                paddingRight: 2
                }}
            >
                <Text $primary={active}>
                    {no}
                </Text>
            </div>
            }
            checkedIcon={
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                paddingRight: 2
                }}
            >
                <Text $primary={active}>
                    {yes}
                </Text>
            </div>
            }
            className="react-switch"
            id="small-radius-switch"
        />
    </>
  );
};

export default SwitchButton;