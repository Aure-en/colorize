import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../Shared/Modal/Modal';
import CodeFormat from './Format/CodeFormat';
import ColorFormat from './Format/ColorFormat';
import Code from './Code';
import Copy from './Copy';

import { getPaletteInFormat } from '../../utils/exportColors';
import { getCodeFormat, getColorFormat } from '../../selectors/export';
import { updateColorFormat, updateCodeFormat } from '../../actions/export';

const ExportModal = ({ isModalOpen, closeModal, palette }) => {
  const dispatch = useDispatch();

  const codeFormat = useSelector(getCodeFormat);
  const colorFormat = useSelector(getColorFormat);

  const [code, setCode] = useState('');

  useEffect(() => {
    if (palette?.colors) {
      const newCode = getPaletteInFormat(palette, codeFormat, colorFormat);
      setCode(newCode);
    }
  }, [palette, colorFormat, codeFormat]);

  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <Content>
        <Heading>Export Palette</Heading>

        <AlignEnd>
          <CodeFormat
            format={codeFormat}
            setFormat={(format) => dispatch(updateCodeFormat(format))}
          />
          <ColorFormat
            format={colorFormat}
            setFormat={(format) => dispatch(updateColorFormat(format))}
          />
        </AlignEnd>

        <Code colorFormat={colorFormat} codeFormat={codeFormat} code={code} />

        <AlignEnd>
          <Copy code={code} />
        </AlignEnd>
      </Content>
    </Modal>
  );
};

ExportModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  palette: PropTypes.shape({
    id: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
        rgb: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        hsl: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 6rem); // Modal padding
  max-width: 30rem;
  max-height: 30rem;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  line-height: 2.75rem;
  margin: 0;
  text-align: center;
`;

const AlignEnd = styled.div`
  align-self: flex-end;
`;

export default ExportModal;
