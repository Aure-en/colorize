import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPalette, setOriginalPalette, setShades } from '../../../actions/palette';
import {
  createImageElem, extractFromImage, removeImageElem,
} from '../../../utils/extractColors';
import { ReactComponent as IconExtract } from '../../../assets/icons/palette/extract.svg';

const ExtractInput = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    if (event.target.files.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      const imageElem = createImageElem(src);
      const callback = (palette) => {
        dispatch(setPalette({ id: null, colors: palette }));
        dispatch(setOriginalPalette({ id: null, colors: palette }));
        dispatch(setShades(palette));
        history.push('/creation');
        removeImageElem(imageElem);
      };
      extractFromImage(imageElem, callback);
    }
  };

  return (
    <Label htmlFor="extract-image" title="Extract palette">
      <IconExtract />
      <Input type="file" accept="image/*" id="extract-image" name="extract-image" onChange={handleChange} />
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primaryText};
  }

  & > svg {
    position: relative;
    bottom: 3px;
  }
`;

const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;
`;

export default ExtractInput;
