import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modals';
import { getModalPalette } from '../../selectors/export';
import { getIsModalOpen } from '../../selectors/modals';
import { getModalCollection } from '../../selectors/favorite';

import ExportModal from '../Export/Modal';
import AuthModal from '../Auth/AuthModal';

import CreatePaletteModal from '../Creation/Save/Modals/CreateModal';
import UpdatePaletteModal from '../Creation/Save/Modals/UpdateModal';

import CreateCollectionModal from '../Collections/Modals/CreateModal';
import UpdateCollectionModal from '../Collections/Modals/UpdateModal';
import DeleteCollectionModal from '../Collections/Modals/DeleteModal';

const Modals = () => {
  const dispatch = useDispatch();

  const isExportModalOpen = useSelector((state) => getIsModalOpen(state, 'export'));
  const isAuthModalOpen = useSelector((state) => getIsModalOpen(state, 'auth'));

  const isCreatePaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'createPalette'));
  const isUpdatePaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'updatePalette'));

  const isCreateCollectionPaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'createCollection'));
  const isUpdateCollectionPaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'updateCollection'));
  const isDeleteCollectionPaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'deleteCollection'));

  const modalPalette = useSelector(getModalPalette);
  const modalCollection = useSelector(getModalCollection);

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

      <CreateCollectionModal
        isModalOpen={isCreateCollectionPaletteModalOpen}
        closeModal={() => dispatch(closeModal('createCollection'))}
      />

      <UpdateCollectionModal
        collection={modalCollection}
        isModalOpen={isUpdateCollectionPaletteModalOpen}
        closeModal={() => dispatch(closeModal('updateCollection'))}
      />

      <DeleteCollectionModal
        collection={modalCollection}
        isModalOpen={isDeleteCollectionPaletteModalOpen}
        closeModal={() => dispatch(closeModal('deleteCollection'))}
      />
    </>
  );
};

export default Modals;
