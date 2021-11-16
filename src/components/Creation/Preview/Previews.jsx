import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Center from './Center';
import Cover from './Cover';
import Triangles from './Triangles';
import Leaves from './Leaves';
import Corner from './Corner';

const preview = (number) => {
  switch (number) {
    case 1:
      return <Center />;
    case 2:
      return <Triangles />;
    case 3:
      return <Cover />;
    case 4:
      return <Leaves />;
    case 5:
      return <Corner />;
    default:
      return <></>;
  }
};

const Previews = ({ number, direction, hasTransitions }) => (
  <Wrapper as={hasTransitions ? undefined : 'div'} className={direction}>
    <CSSTransition
      timeout={750}
      key={number}
      classNames="slide"
    >
      {preview(number)}
    </CSSTransition>
  </Wrapper>
);

Previews.propTypes = {
  number: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  hasTransitions: PropTypes.bool.isRequired,
};

const Wrapper = styled(TransitionGroup)`
  position: relative;
  flex: 1;
  grid-row: 3;
  grid-column: 1 / span 2;
  overflow: hidden;

  & > div {
    width: 100%;
    height: 100%;
  }

  @media all and (min-width: 900px) {
    grid-row: 2;
    grid-column: 2 / span 2;
  }

  @media all and (min-width: 768px) {
    & > div {
      position: absolute;
    }
  }
`;

export default Previews;
