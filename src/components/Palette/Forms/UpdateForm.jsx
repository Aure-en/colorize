import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { getThemes } from '../../../selectors/themes';

import useUpdate from '../../../hooks/palette/useUpdate';

import { ReactComponent as IconCheck } from '../../../assets/icons/check.svg';

const updateForm = () => {
  const {
    name,
    setName,
    themes,
    toggleTheme,
    isPublic,
    togglePublic,
    loading,
    handleSubmit,
  } = useUpdate();
  const allThemes = useSelector(getThemes);

  return (
    <Form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}
    >
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
            placeholder="Enter the palette name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Label>
      </Field>

      <Field>
        <Label htmlFor="theme">
          Themes
          <Message>
            Themes are optional and will help user narrow palette search
            results.
          </Message>
        </Label>
        <List>
          {allThemes.map((theme) => (
            <CheckboxLabel
              key={theme.id}
              htmlFor={theme.name}
              $checked={themes.includes(theme.name)}
            >
              {theme.name}
              <Check>{themes.includes(theme.name) && <IconCheck />}</Check>
              <CheckboxInput
                type="checkbox"
                id={theme.name}
                name={theme.name}
                value={theme.name}
                onChange={() => toggleTheme(theme.name)}
              />
            </CheckboxLabel>
          ))}
        </List>
      </Field>

      <Field>
        <Label htmlFor="visibility">Visibility</Label>

        <CheckboxPublic htmlFor="public" $checked={isPublic}>
          <Check>{isPublic && <IconCheck />}</Check>
          <CheckboxInput
            type="checkbox"
            id="public"
            name="public"
            value={isPublic}
            onChange={togglePublic}
          />
          <Message>
            Check the box to allow other users to see, save and be inspired by
            your palette.
          </Message>
        </CheckboxPublic>
      </Field>

      <Submit>
        <Message>
          {loading === 'pending' && 'Saving palette...'}
          {loading === 'fulfilled' && 'Palette successfully saved.'}
        </Message>
        <Button type="submit">Update</Button>
      </Submit>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  color: ${(props) => props.theme.textPrimary};

  &::placeholder {
    color: ${(props) => props.theme.textSecondary};
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
  text-transform: capitalize;
  color: ${(props) => props.theme.textPrimary};

  &:before {
    content: "";
    display: inline-block;
    min-width: 10px;
    width: 10px;
    height: 10px;
    border: 1px solid ${(props) => props.theme.textSecondary};
    border-radius: 50%;
    margin: 0 0.75rem 0 1.25rem;
  }
`;

const Check = styled.span`
  position: absolute;
  left: 0.97rem;
  top: -4px;
  color: ${(props) => props.theme.textPrimary};
`;

const CheckboxPublic = styled(CheckboxLabel)`
  display: flex;
  margin-top: 0.5rem;

  &:after {
    top: -5px;
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
  text-transform: initial;
  letter-spacing: initial;
  opacity: 0.7;
`;

const Submit = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
`;

const Button = styled.button`
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.textPrimary};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.925rem;
  border: none;
  transition: background-color 0.2s ease-out;

  &:hover {
    background: ${(props) => props.theme.primaryText};
  }
`;

const List = styled.div`
  display: grid;
  margin-top: 1rem;

  @media all and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default updateForm;
