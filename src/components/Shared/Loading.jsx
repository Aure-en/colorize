import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconLoad } from '../../assets/Icons/loading.svg';

const Loading = () => (
  <Wrapper>
    <IconLoad />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textPrimary};
`;

export default Loading;
