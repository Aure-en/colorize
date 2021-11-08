import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { requestSavePalette } from '../../../actions/favorite';
import { getCurrentCollection } from '../../../selectors/favorite';

const FavoriteButton = ({ paletteId }) => {
  const dispatch = useDispatch();
  const currentCollection = useSelector(getCurrentCollection);

  const handleClick = () => {
    dispatch(requestSavePalette(paletteId, currentCollection));
  };

  return (
    <Button type="button" onClick={handleClick}>
      Save as favorite
    </Button>
  );
};

FavoriteButton.propTypes = {
  paletteId: PropTypes.number.isRequired,
};

const Button = styled.button`
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.textPrimary};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;
  margin-left: 1rem;
  justify-self: end;

  &:hover {
    background: ${(props) => props.theme.primaryText};
  }
`;

export default FavoriteButton;
