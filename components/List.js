import Link from "next/link";
import styled from "styled-components";

const StyledUl = styled.ul`
  background-color: white;
  border-radius: 1em;
  padding: 0.1em;
  list-style: none;
`;

const StyledLi = styled.li`
  background-color: #b2f2bb;
  padding: 1em;
  margin: 0.5em;
  border-radius: 1em;
`;

export default function List({ todos, onDelete }) {
  return (
    <StyledUl>
      {todos.map((todo) => (
        <StyledLi key={todo._id}>
          <Link href={`/${todo._id}`}>{todo.name}</Link>
        </StyledLi>
      ))}
    </StyledUl>
  );
}
