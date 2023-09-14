'use client'

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    padding: 48px 204px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background: #53565A;
`;


const AgeWraper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <Wrapper>{children}</Wrapper>
  );
};

export default AgeWraper;