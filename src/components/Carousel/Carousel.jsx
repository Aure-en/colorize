import React from 'react';
import styled from 'styled-components';

const data = [
  { id: 1, name: 'Flowery' },
  { id: 2, name: 'Forest' },
/* { id: 3, name: 'Light' },
  { id: 4, name: 'Dark' },
  { id: 5, name: 'Pastel' },
  { id: 6, name: 'Cityscape' },
  { id: 7, name: 'Nature' },
  { id: 8, name: 'Holographic' }, */
];

const Carousel = () => (
  <CarouselContainer>
    <BtnPrevious>
      &#8249;
    </BtnPrevious>
    <Themes>
      {data.map((theme) => <ThemesName href="#">{theme.name}</ThemesName>)}
    </Themes>
    <BtnNext>
      &#8250;
    </BtnNext>
  </CarouselContainer>
);

const CarouselContainer = styled.div`
display: flex;
justify-content: center;
padding-bottom: 1em;
padding-top: 1em;
@media screen and (min-width: 768px) {
    display:none
   }
`;

const BtnPrevious = styled.button`

`;

const BtnNext = styled.button`

`;

const Themes = styled.div`
display: flex;
`;
const ThemesName = styled.a`
justify-content: space-between;
padding-left: 2em;
padding-right: 2em;
`;

export default Carousel;
