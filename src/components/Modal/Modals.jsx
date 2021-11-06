import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modals';
import { getModalPalette } from '../../selectors/export';
import { getIsModalOpen } from '../../selectors/modals';

import ExportModal from '../Export/Modal';
import AuthModal from '../Auth/AuthModal';
import CreatePaletteModal from '../Creation/Save/Modals/CreateModal';
import UpdatePaletteModal from '../Creation/Save/Modals/UpdateModal';

const Modals = () => {
  const dispatch = useDispatch();

  const isExportModalOpen = useSelector((state) => getIsModalOpen(state, 'export'));
  const isAuthModalOpen = useSelector((state) => getIsModalOpen(state, 'auth'));
  const isCreatePaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'createPalette'));
  const isUpdatePaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'updatePalette'));
  const modalPalette = useSelector(getModalPalette);

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

      <CreatePaletteModal
        isModalOpen={isCreatePaletteModalOpen}
        closeModal={() => dispatch(closeModal('createPalette'))}
      />

      <UpdatePaletteModal
        isModalOpen={isUpdatePaletteModalOpen}
        closeModal={() => dispatch(closeModal('updatePalette'))}
      />
    </>
  );
};

export default Modals;
