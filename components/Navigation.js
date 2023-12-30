import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  background-color: white;
  border-radius: 0.5em;
`;

export default function Navigation() {
  return (
    <StyledNav>
      <p>Home</p>
      <p>Fav</p>
      <p>Done</p>
    </StyledNav>
  );
}
