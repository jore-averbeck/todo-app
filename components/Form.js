import styled from "styled-components";
import Image from "next/image";

const StyledForm = styled.form`
  background-color: #f8f5f2;
  border-radius: 2em;
  display: flex;
  padding: 0.1em;
  padding-top: 0.2em;
  align-items: flex-start;
  margin: auto;
  position: absolute;
  top: 6em;
  left: 2.1em;
`;

const StyledInput = styled.input`
  border-radius: 1em;
  border: none;
  padding: 0.5em;
  margin: 0.2em;
  background-color: #f8f5f2;

  &::placeholder {
    color: #292910;
    font-weight: bold;
    font-size: 1.2em;
    font-style: italic;
  }
`;

const StyledButton = styled.button`
  border-radius: 1em;
  border: none;
  width: 70px;
  padding: 0.3em;
  margin: 0.2em;
  color: white;
  background-color: #f45d48;
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
      <StyledButton type="submit">
        <Image src="/arrow.png" width={25} height={14} alt="add your todo" />
      </StyledButton>
    </StyledForm>
  );
}
