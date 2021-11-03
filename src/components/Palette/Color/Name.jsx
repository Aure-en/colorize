import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { getFormat, getIsDarkMode } from '../../../selectors/settings';

import formatColorCode from '../../../utils/format';
import { getTextShade } from '../../../utils/colors';

const Name = ({ color }) => {
  const [textColor, setTextColor] = useState('');
  const format = useSelector(getFormat);
  const isDarkMode = useSelector(getIsDarkMode);

  // Adapt the color so the text stays visible on the background.
  useEffect(() => {
    setTextColor(getTextShade(color, isDarkMode));
  }, [color, isDarkMode]);

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
  word-break: break-word;

  @media all and (min-width: 800px) {
    flex-direction: row;
    word-break: initial;
  }
`;

export default Name;
