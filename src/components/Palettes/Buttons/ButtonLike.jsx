import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import {
  requestLikePalette,
  requestUnlikePalette,
} from '../../../actions/like';
import { openModal } from '../../../actions/modals';
import { getLikes } from '../../../selectors/like';
import { getIsLoggedIn } from '../../../selectors/user';

import IconHeart from '../../../assets/Icons/card/IconHeart';

const ButtonLike = ({ palette }) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(getIsLoggedIn);
  const likes = useSelector(getLikes);
  const isLiked = likes.find((liked) => liked === palette.id) !== undefined;

  /**
   * If the user is not logged in, open the sign up modal.
   * Else, allow them to like / unlike a palette.
   */
  const handleClick = () => {
    if (!isLoggedIn) {
      dispatch(openModal('auth'));
    } else if (isLiked) {
      dispatch(requestUnlikePalette(palette.id));
    } else {
      dispatch(requestLikePalette(palette.id));
    }
  };

  return (
    <BtnLike
      type="button"
      onClick={handleClick}
      title={palette.nbrLikes > 0 ? palette.nbrLikes : undefined}
      aria-label={`like palette ${palette.id}`}
    >
      <IconHeart isLiked={isLiked} />
    </BtnLike>
  );
};

const BtnLike = styled.button`
  color: ${(props) => props.theme.textPrimary};
`;

ButtonLike.propTypes = {
  palette: PropTypes.shape({
    nbrLikes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ButtonLike;
