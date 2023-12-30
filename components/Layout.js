import styled from "styled-components";

const Main = styled.main`
  max-width: 320px;
  max-height: 568px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem;
  margin-left: 2em;
  margin-right: 2em;
  background-color: #b2f2bb;
  padding: 0.5rem;
  position: relative;
  width: 100%;
  border-radius: 1em;
`;

export default function Layout({ children }) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}
