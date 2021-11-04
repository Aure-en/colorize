import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import {
  getCollections,
  getCurrentCollection,
} from '../../../../selectors/favorite';
import { requestSavePalette, updateCurrentCollection } from '../../../../actions/favorite';

const Menu = ({ paletteId, close }) => {
  const dispatch = useDispatch();
  const currentCollection = useSelector(getCurrentCollection);
  const collections = useSelector(getCollections);

  const handleClick = (collectionId) => {
    dispatch(requestSavePalette(paletteId, collectionId));
    dispatch(updateCurrentCollection(collectionId));
    close();
  };

  return (
    <Wrapper>
      <div>
        <Category>Default</Category>
        <Button onClick={() => handleClick(currentCollection)}>
          {
            collections.find(
              (collection) => collection.id === currentCollection,
            ).name
          }
        </Button>
      </div>

      <div>
        <Category>Collections</Category>
        {collections.map((collection) => (
          <Button
            onClick={() => handleClick(collection.id)}
            $selected={collection.id === currentCollection}
          >
            {collection.name}
          </Button>
        ))}
      </div>
    </Wrapper>
  );
};

Menu.propTypes = {
  paletteId: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  position: absolute;
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
