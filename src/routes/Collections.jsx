import React from 'react';
import { useSelector } from 'react-redux';
import { getCollections } from '../selectors/favorite';
import Collection from '../components/collections/preview/Collection';

const Collections = () => {
  const collections = useSelector(getCollections);

  return (
    <div>
      {collections.map((collection) => <Collection collection={collection} />)}
    </div>
  );
};

export default Collections;
