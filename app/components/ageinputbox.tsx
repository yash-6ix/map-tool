"use client"
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Inputbox = styled.input`
  padding: 24px 70px;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 22px;
  border: 1px solid #53565A;
  background: #FFF;
  width: 100px;
  color: #53565A;
  font-family: KievitOT;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

interface AgeInputBoxProps {
  onChange: (val:string) => void;
  onEnter?: () => void;
  value: string;
}

const AgeInputBox: React.FC<AgeInputBoxProps> = ({ onChange, onEnter, value }) => {
  
  const handleInputChange = (e:any) => {
    onChange(e.target.value)
  }

  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  }

  return (
    <Inputbox onChange={(e) => handleInputChange(e)} onKeyDown={(e) => handleKeyDown(e)} />
  );
};

export default AgeInputBox;