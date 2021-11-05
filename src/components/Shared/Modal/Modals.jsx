import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../../actions/modals';
import { getModalPalette } from '../../../selectors/export';
import { getIsModalOpen } from '../../../selectors/modals';

import ExportModal from '../../Export/Modal';
import AuthModal from '../../Auth/AuthModal';

const Modals = () => {
  const dispatch = useDispatch();

  // Export modal
  const isExportModalOpen = useSelector((state) => getIsModalOpen(state, 'export'));
  const modalPalette = useSelector(getModalPalette);

  // Auth modal
  const isAuthModalOpen = useSelector((state) => getIsModalOpen(state, 'auth'));

  return (
    <>
      <ExportModal
        isModalOpen={isExportModalOpen}
        closeModal={() => dispatch(closeModal('export'))}
        palette={modalPalette}
      />

      <AuthModal
        isModalOpen={isAuthModalOpen}
        closeModal={() => dispatch(closeModal('auth'))}
      />
    </>
  );
};

export default Modals;
