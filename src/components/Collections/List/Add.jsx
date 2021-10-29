import React, { useState } from 'react';
import AddButton from '../Add/AddButton';
import AddModal from '../Add/AddModal';

const Add = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <AddButton openModal={() => setIsModalOpen(true)} />
      <AddModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Add;
