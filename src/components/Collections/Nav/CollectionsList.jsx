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
  position: relative;
  width: 100%;
  padding-top: 0.5rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
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
  padding: 0.5rem 0;

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }
`;

export default CollectionsList;
