import Image from "next/image";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  content-align: center;
  font-size: 30px;
  color: white;
`;

const StyledLi = styled.li`
  list-style: none;
  margin-right: 3em;
`;

const Container = styled.ul`
  display: flex;
  position: sticky;
  margin-top: -0.4px;
  background-color: var(--color-secondary);
  border-radius: 0.4em;
`;

export default function Heading() {
  return (
    <Container>
      <StyledLi>
        <Image src="/Logo_Neu.png" width={60} height={60} alt="Logo" />
      </StyledLi>
      <StyledLi>
        <StyledH1>Todo`s</StyledH1>
      </StyledLi>
    </Container>
  );
}
