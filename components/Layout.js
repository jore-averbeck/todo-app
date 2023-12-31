import styled from "styled-components";
const StyledBody = styled.body`
  background-color: black;
`;
const Main = styled.main`
  max-width: 320px;
  max-height: 568px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5em;
  margin-top: 1em;
  margin-left: 2em;
  margin-right: 2em;
  background-color: var(--color-background);
  padding-top: 0em;
  position: relative;
  width: 100%;
  border: solid black 0.4em;
  border-radius: 1em;
`;

export default function Layout({ children }) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}
