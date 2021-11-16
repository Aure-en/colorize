import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getCollections } from '../../../selectors/favorite';

const CollectionsList = () => {
  const { pathname } = useLocation();
  const collections = useSelector(getCollections);

  return (
    <Ul>
      <li>
        <CollectionLink
          to="/collections"
          $selected={pathname === '/collections'}
        >
          All Collections

        </CollectionLink>
      </li>
      {collections.map((collection) => (
        <li key={collection.id}>
          <CollectionLink
            to={`/collections/${collection.id}`}
            $selected={pathname === `/collections/${collection.id}`}
          >
            {collection.name}
          </CollectionLink>
        </li>
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  position: relative;
  width: 100%;
  padding-top: 1rem;

  &:before {
    content: "";
    position: absolute;
    top: 0.25rem;
    display: inline-block;
    height: 1px;
    width: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${(props) => props.theme.primaryText} 50%,
      transparent 100%
    );
  }
`;

const CollectionLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.textPrimary};
  background: ${(props) => props.$selected && props.theme.primaryBackground};
  border-radius: 5px;
  width: 100%;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

export default CollectionsList;
