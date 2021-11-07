import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import {
  getCollections,
  getCurrentCollection,
  getFavoriteCollection,
} from '../../../../selectors/favorite';
import {
  requestSavePalette,
  requestUnsavePalette,
  updateCurrentCollection,
} from '../../../../actions/favorite';
import { openModal } from '../../../../actions/modals';

const Menu = ({ paletteId, close, position }) => {
  const dispatch = useDispatch();
  const currentCollection = useSelector(getCurrentCollection);
  const collections = useSelector(getCollections);
  const favoriteCollection = useSelector((state) => getFavoriteCollection(state, paletteId));

  const handleClick = (collectionId) => {
    if (favoriteCollection === collectionId) {
      dispatch(requestUnsavePalette(paletteId));
    } else {
      dispatch(requestSavePalette(paletteId, collectionId));
      dispatch(updateCurrentCollection(collectionId));
    }
    close();
  };

  return (
    <Wrapper $position={position === 'left'}>
      <div>
        <Category>Default</Category>
        {currentCollection && (
          <Button onClick={() => handleClick(currentCollection)}>
            {
              collections.find(
                (collection) => collection.id === currentCollection,
              )?.name
            }
          </Button>
        )}
      </div>

      <div>
        <Category>Collections</Category>
        {collections.map((collection) => (
          <Button
            onClick={() => handleClick(collection.id)}
            $selected={collection.id === favoriteCollection}
            key={collection.id}
          >
            {collection.name}
          </Button>
        ))}
      </div>

      <Category
        as="button"
        type="button"
        onClick={() => {
          dispatch(openModal('createCollection'));
          close();
        }}
      >
        Create a new collection
      </Category>
    </Wrapper>
  );
};

Menu.propTypes = {
  paletteId: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
  position: PropTypes.string,
};

Menu.defaultProps = {
  position: undefined,
};

const Wrapper = styled.div`
  position: absolute;
  bottom: ${(props) => props.$position && '0'};
  right: ${(props) => props.$position && '8.75rem'};
  padding: 0.5rem 0;
  max-height: 10rem;
  overflow-y: auto;
  background: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.textPrimary};
  z-index: 10;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5rem;
    background-color: ${(props) => props.theme.primary};
  }
`;

const Category = styled.div`
  padding: 0.5rem 1rem 0.25rem 1rem;
  text-transform: uppercase;
  font-size: 0.825rem;
  color: ${(props) => props.theme.primaryText};
  text-align: start;
`;

const Button = styled.button`
  padding: 0.25rem 1rem 0.25rem 2rem;
  width: 100%;
  text-align: start;
  background: ${(props) => props.$selected && props.theme.primaryBackgroundActive};
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    background: ${(props) => props.theme.primaryBackground};
  }
`;

export default Menu;
