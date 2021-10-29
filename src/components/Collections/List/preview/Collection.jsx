import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Preview from './Preview';
import Name from './Name';
import Number from './Number';

const Collection = ({ collection }) => (
  <Wrapper to={`/collections/${collection.id}`}>
    <Preview palettes={collection.palettes} />
    <div>
      <Name name={collection.name} />
      <Number number={collection.palettes.length} />
    </div>
  </Wrapper>
);

Collection.propTypes = {
  collection: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    palettes: PropTypes.arrayOf(
      PropTypes.shape({
        colors: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            hex: PropTypes.string.isRequired,
            rgb: PropTypes.arrayOf(PropTypes.number).isRequired,
            hsl: PropTypes.arrayOf(PropTypes.number).isRequired,
            hsv: PropTypes.arrayOf(PropTypes.number).isRequired,
            cmyk: PropTypes.arrayOf(PropTypes.number).isRequired,
          }),
        ),
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const Wrapper = styled(Link)`
  display: block;

  & > *:first-child {
    margin-bottom: 0.25rem;
  }
`;

export default Collection;
