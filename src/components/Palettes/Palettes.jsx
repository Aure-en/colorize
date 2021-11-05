import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getPage, getLoading, getSortBy, getFilterBy } from '../../selectors/palettes';
import { updateLoading, fetchPalettes } from '../../actions/palettes';

import CardsList from './CardsList';
import Loading from '../Shared/Loading';

const Palettes = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // Compose key to save palettes
  const category = location.pathname === '/' ? 'palettes' : location.pathname.slice(1);
  const query = new URLSearchParams(useLocation().search);
  const page = query.get('page') || 1;
  const sort = useSelector(getSortBy);
  const filter = useSelector(getFilterBy);
  const key = `/${category}/${filter}/${sort}/${page}`;

  const pageFromStore = useSelector((state) => getPage(state, key));
  const loading = useSelector(getLoading);

  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    (async () => {
      if (pageFromStore) {
        setPalettes(pageFromStore.palettes.slice((page - 1) * 20, page * 20));
      } else {
        dispatch(fetchPalettes({
          key,
          category,
          filter,
          sort,
          page,
        }));
        dispatch(updateLoading('pending'));
      }
    })();
  }, [pageFromStore]);

  if (loading === 'pending') {
    return <Loading />;
  }

  return (
    <CardsList palettes={palettes} />
  );
};

export default Palettes;
