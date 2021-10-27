import React from 'react';
import styled from 'styled-components';

const data = [
  { id: 1, name: 'Flowery' },
  { id: 2, name: 'Forest' },
  { id: 3, name: 'Light' },
  { id: 4, name: 'Dark' },
  { id: 5, name: 'Pastel' },
  { id: 6, name: 'Cityscape' },
  { id: 7, name: 'Nature' },
  { id: 8, name: 'Holographic' },
];

const Carousel = () => (
  <CarouselContainer>
    <BtnPrevious>
      &#8249;
    </BtnPrevious>
    <Themes>
      {data.map((theme) => <a href="#">{theme.name}</a>)}
    </Themes>
    <BtnNext>
      &#8250;
    </BtnNext>
  </CarouselContainer>
);

const CarouselContainer = styled.div`
@media screen and (min-width: 768px) {
    display:none
   }
`;

const BtnPrevious = styled.button`
display: flex;
`;

const BtnNext = styled.button`
display: flex;
`;

const Themes = styled.div`
display: flex;
justify-content: space-between;
`;

export default Carousel;
