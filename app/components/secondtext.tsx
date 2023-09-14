'use client'

import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: #53565A;
  font-family: KievitOT;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.085px;
`;


const SecondText: React.FC<{children:string}> = ({children}) => {
  return (
    <Text className="my-auto">{children}</Text>
  );
};

export default SecondText;