import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { likePalette, unlikePalette } from '../../../actions/like';
import IconHeart from '../../../assets/icons/card/IconHeart';
import { getLikes } from '../../../reducers/likeReducer';

const ButtonLike = ({ paletteId }) => {
  const likes = useSelector(getLikes);
  const dispatch = useDispatch();

  const isLiked = likes.includes(paletteId);

  const handleClick = () => {
    if (isLiked) {
      dispatch(unlikePalette(paletteId));
    } else {
      dispatch(likePalette(paletteId));
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      <IconHeart isLiked={isLiked} />
    </button>
  );
};

ButtonLike.propTypes = {
  paletteId: PropTypes.number.isRequired,
};

export default ButtonLike;
