import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../../actions/modals';
import { getModalPalette } from '../../../selectors/export';
import { getIsModalOpen } from '../../../selectors/modals';

import ExportModal from '../../Export/Modal';
import AuthModal from '../../Auth/AuthModal';

const Modals = () => {
  const dispatch = useDispatch();
  const isExportModalOpen = useSelector((state) => getIsModalOpen(state, 'export'));
  const modalPalette = useSelector(getModalPalette);

  return (
    <ExportModal
      isModalOpen={isExportModalOpen}
      closeModal={() => dispatch(closeModal('export'))}
      palette={modalPalette}
    />
  );
};

export default Modals;
