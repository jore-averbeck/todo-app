import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

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
  border: none;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 2rem;
`;

export default function Navigation({ onDeleteAll }) {
  return (
    <StyledNav>
      <StyledLink href="/">
        <StyledIcon icon={faHouse} />
      </StyledLink>

      <StyledLink href="/done">
        {" "}
        <StyledIcon icon={faCheck} />
      </StyledLink>
      <StyledButton onClick={() => onDeleteAll()}>
        {/* <Image src="/trash.png" width={30} height={30} /> */}
        <StyledIcon icon={faTrash} />
      </StyledButton>
    </StyledNav>
  );
}
