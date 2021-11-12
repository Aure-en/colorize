import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';
import PropTypes from 'prop-types';
import Color from './Color/Color';
import { setMainPalette, setShades } from '../../actions/palette';

const Palette = ({
  palette,
  direction,
}) => {
  const dispatch = useDispatch();

  return (
    <Wrapper
      $direction={direction}
      list={palette.colors}
      setList={(reorderedPalette) => {
        dispatch(setMainPalette({
          colors: reorderedPalette.map((color) => {
            // Remove extra property to keep comparison easy between main and original palettes.
            delete color.chosen;
            delete color.selected;
            return color;
          }),
        }));
        dispatch(setShades(reorderedPalette));
      }}
    >
      {palette.colors.map((color) => (
        <Color key={color.position} color={color} />
      ))}
    </Wrapper>
  );
};

Palette.propTypes = {
  palette: PropTypes.shape({
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        rgb: PropTypes.arrayOf(PropTypes.number).isRequired,
        hsl: PropTypes.arrayOf(PropTypes.number).isRequired,
        hsv: PropTypes.arrayOf(PropTypes.number).isRequired,
        cmyk: PropTypes.arrayOf(PropTypes.number).isRequired,
      }).isRequired,
    ).isRequired,
    id: PropTypes.number,
  }).isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

Palette.defaultProps = {
  direction: 'horizontal',
};

const Wrapper = styled(ReactSortable)`
  display: flex;
  grid-gap: 1rem;
  width: 100%;
  flex: 1;

  & > * {
    flex: 1;
  }
  
  @media all and (min-width: 900px) {
    flex-direction: ${(props) => (props.$direction === 'vertical' ? 'column' : 'row')};
  }
`;

export default Palette;
