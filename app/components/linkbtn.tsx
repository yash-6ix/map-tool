'use client'

import React from 'react';
import styled from 'styled-components';

const Link = styled.div`
  color: #2B4E17;
  font-family: KievitOT;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.085px;
  text-decoration-line: underline;
  magin:auto;

  @media (max-width: 576px) { /* Change the value based on your desired breakpoint */
    font-size: 16px; /* Change the font size for smaller devices */
    letter-spacing:0.04px
  }
`;


const LinkButton: React.FC<{text:string}> = ({text}) => {
  return (
    <div className='flex'>
      <Link>
          {text}
      </Link>
    </div>
  );
};

export default LinkButton;