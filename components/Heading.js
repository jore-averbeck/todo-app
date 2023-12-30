import Image from "next/image";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  content-align: center;
  font-size: 30px;
`;

const StyledLi = styled.li`
  list-style: none;
  margin-right: 3em;
`;

const Container = styled.ul`
  display: flex;
  background-color: white;
  border-radius: 1em;
  padding: 0.2em;
`;

export default function Heading() {
  return (
    <Container>
      <StyledLi>
        <Image src="/Logo1.png" width={70} height={70} alt="Logo" />
      </StyledLi>
      <StyledLi>
        <StyledH1>Todo`s</StyledH1>
      </StyledLi>
    </Container>
  );
}
