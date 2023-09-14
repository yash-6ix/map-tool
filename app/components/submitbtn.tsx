'use client'

import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  padding: 10px 32px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #A7D500;
  flex

  color: #2B4E17;
  /* Subtitle 1 */
  font-family: KievitOT;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.085px;
`;


const SubmitButton: React.FC = () => {
  return (
      <Button>
          Enter
      </Button>
  );
};

export default SubmitButton;