import React, { useState } from 'react';

import DeleteButton from './DeleteButton';
import DeleteModal from './DeleteModal';

const DeleteAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <DeleteButton openModal={() => setIsModalOpen(true)} />
      <DeleteModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default DeleteAccount;
