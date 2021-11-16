import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modals';
import { getExportPalette } from '../../selectors/export';
import { getIsModalOpen } from '../../selectors/modals';
import { getModalCollection } from '../../selectors/favorite';
import { getModalPalette } from '../../selectors/palette';

import ExportModal from '../Export/Modal';

import AuthModal from '../Auth/AuthModal';
import ExpiredTokenModal from '../Auth/ExpiredTokenModal';

import CreatePaletteModal from '../Palette/Modals/CreateModal';
import UpdatePaletteModal from '../Palette/Modals/UpdateModal';
import DeletePaletteModal from '../Palette/Modals/DeleteModal';

import CreateCollectionModal from '../Collections/Modals/CreateModal';
import UpdateCollectionModal from '../Collections/Modals/UpdateModal';
import DeleteCollectionModal from '../Collections/Modals/DeleteModal';

const Modals = () => {
  const dispatch = useDispatch();

  const isExportModalOpen = useSelector((state) => getIsModalOpen(state, 'export'));
  const isAuthModalOpen = useSelector((state) => getIsModalOpen(state, 'auth'));
  const isExpiredTokenModalOpen = useSelector((state) => getIsModalOpen(state, 'expiredToken'));

  const isCreatePaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'createPalette'));
  const isUpdatePaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'updatePalette'));
  const isDeletePaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'deletePalette'));

  const isCreateCollectionPaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'createCollection'));
  const isUpdateCollectionPaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'updateCollection'));
  const isDeleteCollectionPaletteModalOpen = useSelector((state) => getIsModalOpen(state, 'deleteCollection'));

  const palette = useSelector(getModalPalette);
  const exportPalette = useSelector(getExportPalette);
  const modalCollection = useSelector(getModalCollection);

  return (
    <>
      <ExportModal
        isModalOpen={isExportModalOpen}
        closeModal={() => dispatch(closeModal('export'))}
        palette={exportPalette}
      />

      <AuthModal
        isModalOpen={isAuthModalOpen}
        closeModal={() => dispatch(closeModal('auth'))}
      />

      <ExpiredTokenModal
        isModalOpen={isExpiredTokenModalOpen}
        closeModal={() => dispatch(closeModal('expiredToken'))}
      />

      {/* CUD Palette */}
      <CreatePaletteModal
        isModalOpen={isCreatePaletteModalOpen}
        closeModal={() => dispatch(closeModal('createPalette'))}
      />

      <UpdatePaletteModal
        isModalOpen={isUpdatePaletteModalOpen}
        closeModal={() => dispatch(closeModal('updatePalette'))}
      />

      <DeletePaletteModal
        palette={palette}
        isModalOpen={isDeletePaletteModalOpen}
        closeModal={() => dispatch(closeModal('deletePalette'))}
      />

      {/* CUD Collection */}
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
