import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../../actions/export';
import { getIsModalOpen, getModalPalette } from '../../../selectors/export';
import ExportModal from '../../Palettes/Export/Modal';

const Modals = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getIsModalOpen);
  const modalPalette = useSelector(getModalPalette);

  return (
    <ExportModal
      isModalOpen={isModalOpen}
      closeModal={() => dispatch(closeModal())}
      palette={modalPalette}
    />
  );
};

export default Modals;
