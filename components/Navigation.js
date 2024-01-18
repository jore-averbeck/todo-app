import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const StyledNav = styled.nav`
  display: flex;
  padding: 0.7em;
  padding-left: 2em;
  padding-right: 2em;
  justify-content: space-evenly;
  background-color: #f8f5f2;
  border-radius: 0.5em;
`;

const StyledLink = styled(Link)`
  padding: 0.2em;
  border-radius: 1em;
  flex: 1;
`;
const StyledButton = styled.button`
  padding: 0.2em;
  border-radius: 1em;
`;
export default function Navigation({ onDeleteAll }) {
  return (
    <StyledNav>
      <StyledLink href="/">
        <Image src="/home-icon-silhouette.png" width={30} height={30} />
      </StyledLink>

      <StyledLink href="/">
        {" "}
        <Image src="/heart.png" width={30} height={30} />
      </StyledLink>
      {/* <StyledLink href="/">
        <Image src="/check.png" width={30} height={30} />
      </StyledLink> */}
      <StyledButton onClick={() => onDeleteAll()}>
        <Image src="/trash.png" width={30} height={30} />
      </StyledButton>
    </StyledNav>
  );
}
