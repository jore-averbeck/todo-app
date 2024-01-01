import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledUl = styled.ul`
  position: absolute;
  top: 10em;
  left: 1em;
  right: 1em;
  bottom: 5em;
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
  background-color: ${({ isSelected }) => (isSelected ? "white" : "black")};
`;

const StyledHeartButton = styled.button`
  background-color: transparent;
  border: none;
`;

export default function List({
  todos,
  onDelete,
  onToggleSelection,
  isSelected,
}) {
  console.log(todos.isSelected);
  return (
    <StyledUl>
      {todos.map((todo) => (
        <>
          <StyledLi key={todo._id}>
            <StyledCheckButton
              onClick={() => onToggleSelection(todo._id)}
              isSelected={isSelected}
            >
              {isSelected ? "✔️" : ""}
            </StyledCheckButton>
            <StyledLink href={`/${todo._id}`}>{todo.name}</StyledLink>
            <StyledHeartButton>
              <Image src="/heart.png" width={25} height={25} />
            </StyledHeartButton>{" "}
            <button onClick={() => onDelete(todo._id)}>✖︎</button>
          </StyledLi>
        </>
      ))}
    </StyledUl>
  );
}
