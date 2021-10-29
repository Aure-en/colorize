import React, { useState } from 'react';
import styled from 'styled-components';
import AddModal from '../Add/AddModal';

const Add = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsModalOpen(true)}>Create a new collection</Button>
      <AddModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};

const Button = styled.button`
  padding: 0.5rem 0 1rem 0;
`;

export default Add;
