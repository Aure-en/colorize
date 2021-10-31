import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Modal from './Modal';

const Export = ({ palette }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button toggleMenu={() => setIsModalOpen(!isModalOpen)} />
      <Modal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        palette={palette}
      />
    </>
  );
};

Export.propTypes = {
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

export default Export;
