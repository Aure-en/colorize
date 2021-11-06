import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { requestSavePalette } from '../../../../actions/favorite';

const FavoriteButton = ({ paletteId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(requestSavePalette(paletteId));
  };

  return (
    <Button type="button" onClick={handleClick}>
      Save
    </Button>
  );
};

FavoriteButton.propTypes = {
  paletteId: PropTypes.string.isRequired,
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
