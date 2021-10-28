import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'color';
import { useSelector } from 'react-redux';
import { getFormat } from '../../../selectors/settings';
import formatColorCode from '../../../utils/format';

const Name = ({ color }) => {
  const [textColor, setTextColor] = useState('');
  const format = useSelector(getFormat);

  // If the color is bright, darken it to use it on the card.
  useEffect(() => {
    const newColor = Color.rgb(color.rgb);
    if (newColor.hsl().array()[2] > 70) {
      setTextColor(newColor.lightness(70).hsl().string());
    } else {
      setTextColor(newColor.hsl().string());
    }
  }, [color]);

  return (
    <Informations>
      <div>
        <div>{color.name}</div>
        <Code $color={textColor}>{formatColorCode(format, color)}</Code>
      </div>
    </Informations>
  );
};

Name.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

const Code = styled.small`
  color: ${(props) => props.$color};
  font-size: 0.925rem;
  text-transform: uppercase;
`;

const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow-wrap: break-word;

  @media all and (min-width: 800px) {
    flex-direction: row;
  }
`;

export default Name;
