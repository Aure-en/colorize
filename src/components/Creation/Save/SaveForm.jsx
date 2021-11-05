import React from 'react';
import styled from 'styled-components';

const SaveForm = () => (
  <Form>
    <Field>
      <Label htmlFor="name">
        Name
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
        <></>
      </Label>
    </Field>
  </Form>
);

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

const Submit = styled.button`
  text-transform: uppercase;
  border: 1px solid ${(props) => props.theme.textPrimary};
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.textPrimary};
`;

export default SaveForm;
