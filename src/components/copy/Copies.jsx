import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Copy from './Copy';
import { getCopied } from '../../selectors/copy';

const Copies = () => {
  const copied = useSelector(getCopied);

  return (
    <Wrapper>
      {copied.map((copy) => (
        <Copy
          x={copy.x}
          y={copy.y}
          key={copy.id}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
`;

export default Copies;
