import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledUl = styled.ul`
  border-radius: 1em;
  padding: 0.1em;
  list-style: none;
  background-color: #f8f5f2;
  margin: 0.4em;
`;
// background-image: repeating-linear-gradient(
//   90deg,
//   var(--color-fourth),
//   var(--color-third),
//   var(--color-secondary)
// );
const StyledLi = styled.li`
  background-color: #5aba9c;
  padding: 0.4em;
  margin: 0.5em;
  border-radius: 0.4em;
  display: flex;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(4px);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.2em;
  &:hover,
  &:focus {
    color: var(--color-secondary);
  }
  &:active {
    color: var(--color-fourth);
  }
`;

const StyledCheckButton = styled.button`
  border: 0.4em solid black;
  border-radius: 0.4em;
  height: 20px;
  width: 25px;
  border: none;
`;

const StyledHeartButton = styled.button`
  background-color: transparent;
  border: none;
`;

export default function List({ todos, onDelete }) {
  return (
    <StyledUl>
      {todos.map((todo) => (
        <StyledLink href={`/${todo._id}`}>
          <StyledLi key={todo._id}>
            <StyledCheckButton></StyledCheckButton>
            {todo.name}
            <StyledHeartButton>
              <Image src="/heart.png" width={25} height={25} />
            </StyledHeartButton>
          </StyledLi>
        </StyledLink>
      ))}
    </StyledUl>
  );
}
