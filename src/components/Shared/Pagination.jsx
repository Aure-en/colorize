import React from 'react';
import styled from 'styled-components';

function Pagination() {
  return (
    <PaginationDropdown>
      <BtnPrevious>
        &#8249;
      </BtnPrevious>
      <Number href="#">
        1
      </Number>
      <Number href="#">
        2
      </Number>
      <Number href="#">
        3
      </Number>
      <Number href="#">
        4
      </Number>
      <Number href="#">
        5
      </Number>
      <BtnNext>
        &#8250;
      </BtnNext>
    </PaginationDropdown>
  );
}

const PaginationDropdown = styled.div`
display: flex;
align-items: ;
justify-content: center;
`;

const Number = styled.a`
color: ${(props) => props.theme.textPrimary};
display: flex;
padding: 5px;
text-decoration: none;
display: inline-block;

&:hover: {
    background-color: ${(props) => props.theme.background};
    ;
    color: black;
  }
`;

const BtnPrevious = styled.button`
display: flex;
text-decoration: none;
color: ${(props) => props.theme.textPrimary};
&:hover: {
    background-color: #fff;
    color: black;
  }
`;

const BtnNext = styled.button`
text-decoration: none;
display: flex;
color: ${(props) => props.theme.textPrimary};
`;
export default Pagination;
