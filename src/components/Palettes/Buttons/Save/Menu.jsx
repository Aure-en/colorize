import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';
import {
  getCollections,
  getCurrentCollection,
  getFavoriteCollections,
} from '../../../../selectors/favorite';
import {
  requestAddPaletteToCollection,
  requestDeletePaletteFromCollection,
  setCurrentCollection,
} from '../../../../actions/favorite';
import { openModal } from '../../../../actions/modals';

import { toastify } from '../../../Shared/Toast';

import { ReactComponent as IconFavorite } from '../../../../assets/icons/collections/star.svg';

const Menu = ({
  paletteId, isOpen, close, position,
}) => {
  const dispatch = useDispatch();
  const currentCollection = useSelector(getCurrentCollection);
  const collections = useSelector(getCollections);
  const favoriteCollections = useSelector((state) => getFavoriteCollections(state, paletteId));

  const handleClick = (collectionId) => {
    const collectionName = collections.find(
      (collection) => collection.id === collectionId,
    ).name;

    if (
      favoriteCollections.find(
        (collection) => collection.id === collectionId,
      ) !== undefined
    ) {
      dispatch(requestDeletePaletteFromCollection(paletteId, collectionId));
      toastify(`Palette successfully removed from ${collectionName}.`);
    } else {
      dispatch(requestAddPaletteToCollection(paletteId, collectionId));
      dispatch(setCurrentCollection(collectionId));
      toastify(`Palette successfully saved to ${collectionName}.`);
    }
    close();
  };

  return (
    <Transition
      in={isOpen}
      timeout={{
        enter: 0,
        exit: 500,
      }}
      mountOnEnter={false}
      unmountOnExit
    >
      {(state) => (
        <Wrapper
          $position={position === 'left'}
          $entered={state === 'entered'}
          onWheel={(e) => {
            e.stopPropagation();
          }}
        >
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
                key={collection.id}
              >
                {favoriteCollections.find(
                  (favoriteCollection) => favoriteCollection.id === collection.id,
                ) !== undefined && (
                  <Icon>
                    <IconFavorite />
                  </Icon>
                )}
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
      )}
    </Transition>
  );
};

Menu.propTypes = {
  paletteId: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  position: PropTypes.string,
};

Menu.defaultProps = {
  position: undefined,
};

const Wrapper = styled.div`
  position: absolute;
  bottom: ${(props) => props.$position && '0'};
  right: ${(props) => (props.$position ? '8.76rem' : 0)};
  padding: ${(props) => (props.$entered || props.$position ? '0.5rem 0' : 0)};
  max-height: ${(props) => (props.$entered || props.$position ? '10rem' : 0)};
  overflow-y: auto;
  background: ${(props) => props.theme.background};
  border: 1px solid
    ${(props) => (props.$entered || props.$position
    ? props.theme.textPrimary
    : 'transparent')};
  z-index: 10;
  opacity: ${(props) => (props.$entered ? 1 : props.$position ? 0 : 1)};
  transform: translateX(
    ${(props) => (props.$entered ? 0 : props.$position ? '15%' : 0)}
  );
  transition: all 0.5s ease, opacity 0.25s ease;

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

  @media all and (min-width: 768px) {
    right: ${(props) => (props.$position ? '8.76rem' : 'initial')};
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
  position: relative;
  padding: 0.25rem 1rem 0.25rem 2rem;
  width: 100%;
  text-align: start;
  color: ${(props) => props.theme.textPrimary};

  &:hover {
    background: ${(props) => props.theme.primaryBackground};
  }
`;

const Icon = styled.span`
  color: ${(props) => props.theme.primaryText};
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(calc(-50% + 2px));
`;

export default Menu;
