import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const StyledNav = styled.nav`
  display: flex;
  padding: 0.6em;
  justify-content: space-between;
  background-color: var(--color-third);
  border-radius: 0.5em;
`;

const StyledLink = styled(Link)`
  padding: 0.2em;
  border-radius: 1em;
`;

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink href="/">
        <Image src="/home-icon-silhouette.png" width={30} height={30} />
      </StyledLink>

      <StyledLink href="/">
        {" "}
        <Image src="/heart.png" width={30} height={30} />
      </StyledLink>
      <StyledLink href="/">
        <Image src="/check.png" width={30} height={30} />
      </StyledLink>
      <StyledLink href="/">
        <Image src="/trash.png" width={30} height={30} />
      </StyledLink>
    </StyledNav>
  );
}
