import styled from "styled-components";

const StyledForm = styled.form`
  background-color: white;
  border-radius: 2em;
  display: flex;
  padding: 0.5em;
  align-items: flex-start;
  margin: auto;
`;

const StyledInput = styled.input`
  border-radius: 1em;
  padding: 0.5em;
  margin: 0.2em;
`;

const StyledButton = styled.button`
  border-radius: 1em;
  padding: 0.5em;
  margin: 0.2em;
  background-color: white;
`;

export default function Form({ onSubmit, value }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <label htmlFor="text"></label>
      <StyledInput
        id="text"
        name="name"
        type="text"
        defaultValue={value}
        placeholder="add a new todo"
      />
      <StyledButton type="submit">Add</StyledButton>
    </StyledForm>
  );
}
