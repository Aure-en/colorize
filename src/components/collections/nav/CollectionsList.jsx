import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCollections } from '../../../selectors/favorite';

const CollectionsList = () => {
  const collections = useSelector(getCollections);

  return (
    <Ul>
      {collections.map((collection) => (
        <li>
          <CollectionLink to={`/collections/${collection.id}`}>
            {collection.name}
          </CollectionLink>
        </li>
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  border-top: 1px solid ${(props) => props.theme.text_secondary};
  width: 100%;
  padding-top: 1rem;
`;

const CollectionLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 0;
`;

export default CollectionsList;
