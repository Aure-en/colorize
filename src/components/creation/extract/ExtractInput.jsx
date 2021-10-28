import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  createImageElem, extractFromImage, removeImageElem,
} from '../../../utils/extractColors';
import { ReactComponent as IconExtract } from '../../../assets/icons/palette/extract.svg';

const ExtractInput = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.files.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      const imageElem = createImageElem(src);
      const callback = (palette) => {
        // dispatch
        removeImageElem(imageElem);
      };
      extractFromImage(imageElem, callback);
    }
  };

  return (
    <Label htmlFor="extract-image">
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
    color: ${(props) => props.theme.primary};
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
