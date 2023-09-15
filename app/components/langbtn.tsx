'use client'

import React from 'react';
import styled from 'styled-components';

const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#A7D500" : "#EBEBEC"};
  color: ${props => props.$primary ? "#2B4E17" : "#53565A"};

  /* Body */
  font-family: KievitOT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.04px;

  margin: auto;
  padding: 8px;
  border-radius: 100px;
`;


const LanguageButton: React.FC<{ text: string; active: boolean; changeLanguage: (val:string)=>void; }> = ({text, active, changeLanguage}) => {
  return (
      <Button $primary={active} onClick={()=>changeLanguage(text)} className='uppercase'>{text}</Button>
  );
};

export default LanguageButton;