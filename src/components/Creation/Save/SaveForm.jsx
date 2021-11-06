import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getThemes } from "../../../selectors/themes";

import useForm from "../../../hooks/palette/useForm";

import check from "../../../assets/icons/check.svg";

const SaveForm = () => {
  const {
    name,
    setName,
    themes,
    setThemes,
    isPublic,
    setIsPublic,
    handleSubmit,
  } = useForm();
  const allThemes = useSelector(getThemes);

  return (
    <Form>
      <Field>
        <Label htmlFor="name">
          Name
          <Message>
            Name is optional and will allow users to find your palette easily.
          </Message>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter the collection name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Label>
      </Field>

      <Field>
        <Label htmlFor="theme">
          Theme
          <Message>
            Themes are optional and will help user narrow palette search
            results.
          </Message>
        </Label>
        {allThemes.map((theme) => (
          <CheckboxLabel
            key={theme.id}
            htmlFor={theme.name}
            $checked={themes.includes(theme.name)}
          >
            {theme.name}
            <CheckboxInput type="checkbox" id={theme.name} name={theme.name} value={theme.name} onChange={} />
          </CheckboxLabel>
        ))}
      </Field>

      <Field>
        <Label htmlFor="visibility">
          Visibility
          <Message>
            Check the box to allow other users to see, save and be inspired by
            your palette.
          </Message>
        </Label>
      </Field>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.textPrimary};
  padding: 0.5rem 0 0.25rem 0;
  background: transparent;

  &::placeholder {
    color: ${(props) => props.theme.text_silent};
  }

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.textPrimary};
    outline: 2px solid transparent;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 0.825rem;
  letter-spacing: 1px;
  color: ${(props) => props.theme.textPrimary};
`;

const CheckboxLabel = styled.label`
  position: relative;
  cursor: pointer;
  &:before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid ${(props) => props.theme.text_textSecondary};
    border-radius: 50%;
    margin: 0 0.75rem 0 1.25rem;
  }
  &:after {
    position: absolute;
    left: 1rem;
    top: -2px;
    content: ${(props) => props.$checked && `url(${check})`};
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;
`;

const Message = styled.small`
  font-size: 0.825rem;
  color: ${(props) => props.theme.primaryText};
`;

const Submit = styled.button`
  text-transform: uppercase;
  border: 1px solid ${(props) => props.theme.textPrimary};
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.textPrimary};
`;

export default SaveForm;
