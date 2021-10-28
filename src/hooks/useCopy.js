import { useSelector, useDispatch } from 'react-redux';
import { addCopy, removeCopy } from '../actions/copy';
import { getFormat } from '../selectors/settings';
import formatColorCode from '../utils/format';

const useCopy = () => {
  const dispatch = useDispatch();
  const format = useSelector(getFormat);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const createCopyPayload = (x, y, id) => ({
    x,
    y,
    id,
  });

  const copy = (x, y, color) => {
    copyToClipboard(formatColorCode(format, color));
    const id = Date.now();
    const copyToAdd = createCopyPayload(x, y, id);
    dispatch(addCopy(copyToAdd));
    setTimeout(() => dispatch(removeCopy(id)), 2000);
  };

  return copy;
};

export default useCopy;
