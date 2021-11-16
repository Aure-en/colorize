import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getDefaultCollection } from '../../../../selectors/favorite';

import Preview from './Preview';
import Name from './Name';
import Number from './Number';
import Menu from '../../Menu/Menu';

const Collection = ({ collection }) => {
  const defaultCollection = useSelector(getDefaultCollection);

  return (
    <Wrapper to={`/collections/${collection.id}`}>
      <Preview palettes={collection.palettes} />
      <Informations>
        <div>
          <Name name={collection.name} />
          <Number number={collection.palettes.length} />
        </div>
        {collection.id !== defaultCollection && <Menu collection={collection} />}
      </Informations>
    </Wrapper>
  );
};

Collection.propTypes = {
  collection: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    palettes: PropTypes.arrayOf(
      PropTypes.shape({
        colors: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            hex: PropTypes.string,
            rgb: PropTypes.arrayOf(PropTypes.number),
            hsl: PropTypes.arrayOf(PropTypes.number),
            hsv: PropTypes.arrayOf(PropTypes.number),
            cmyk: PropTypes.arrayOf(PropTypes.number),
          }),
        ),
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const Wrapper = styled(Link)`
  display: block;
  color: ${(props) => props.theme.textPrimary};

  & > *:first-child {
    margin-bottom: 0.25rem;
  }
`;

const Informations = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
`;

export default Collection;
