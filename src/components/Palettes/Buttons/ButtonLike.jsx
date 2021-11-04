import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { requestLikePalette, requestUnlikePalette } from '../../../actions/like';
import IconHeart from '../../../assets/icons/card/IconHeart';
import { getLikes } from '../../../selectors/like';

const ButtonLike = ({ paletteId }) => {
  const likes = useSelector(getLikes);
  const dispatch = useDispatch();

  const isLiked = likes.find((palette) => palette.id === paletteId) !== undefined;

  const handleClick = () => {
    if (isLiked) {
      dispatch(requestUnlikePalette(paletteId));
    } else {
      dispatch(requestLikePalette(paletteId));
    }
  };

  return (
    <BtnLike type="button" onClick={handleClick}>
      <IconHeart isLiked={isLiked} />
    </BtnLike>
  );
};

const BtnLike = styled.button`
  color: ${(props) => props.theme.textPrimary};
`;

ButtonLike.propTypes = {
  paletteId: PropTypes.number.isRequired,
};

export default ButtonLike;
