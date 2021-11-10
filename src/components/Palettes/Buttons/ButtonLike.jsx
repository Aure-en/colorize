import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { requestLikePalette, requestUnlikePalette } from '../../../actions/like';
import { openModal } from '../../../actions/modals';
import { getLikes } from '../../../selectors/like';
import { getIsLoggedIn } from '../../../selectors/user';

import IconHeart from '../../../assets/icons/card/IconHeart';

const ButtonLike = ({ paletteId }) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(getIsLoggedIn);
  const likes = useSelector(getLikes);
  const isLiked = likes.find((palette) => palette.id === paletteId) !== undefined;

  /**
   * If the user is not logged in, open the sign up modal.
   * Else, allow them to like / unlike a palette.
   */
  const handleClick = () => {
    if (!isLoggedIn) {
      dispatch(openModal('auth'));
    } else if (isLiked) {
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
