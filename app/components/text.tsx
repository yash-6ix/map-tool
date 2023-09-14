'use client'

import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: #53565A;
  font-family: KievitOT;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.06px;
`;


const SubText: React.FC<{children:string}> = ({children}) => {
  return (
    <Text>{children}</Text>
  );
};

export default SubText;