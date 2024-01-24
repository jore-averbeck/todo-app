import Link from "next/link";
import { useState } from "react";
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
  flex: 2;
  &:hover,
  &:focus {
    color: var(--color-secondary);
  }
  &:active {
    color: var(--color-fourth);
  }
`;

const StyledHeartButton = styled.button`
  background-color: transparent;
  border: none;
`;

const StyledPaginationContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1em;
`;

const StyledPaginationButton = styled.button`
  padding: 0.5;
  border-radius: 0.5em;
  background-color: white;
  font-size: 1em;
  border: 1 solid lightgray;
  margin-bottom: 0.5em;
`;

export default function List({
  todos,
  onDelete,
  onToggleFavourites,
  favourites,
}) {
  const todosPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  const totalPages = Math.ceil(todos.length / todosPerPage);
  const paginatedTodos = todos.slice(
    (currentPage - 1) * todosPerPage,
    currentPage * todosPerPage
  );
  return (
    <>
      <StyledUl>
        {paginatedTodos.map((todo) => (
          <StyledLi key={todo._id}>
            <StyledLink href={`/${todo._id}`}>{todo.name}</StyledLink>
            <StyledHeartButton
              onClick={(event) => event && onToggleFavourites(todo._id, event)}
            >
              <span>{favourites.includes(todo._id) ? "✅" : "📋"}</span>
            </StyledHeartButton>
            <button onClick={() => onDelete(todo._id)}>✖︎</button>
          </StyledLi>
        ))}
        <StyledPaginationContainer>
          {currentPage > 1 ? (
            <StyledPaginationButton
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </StyledPaginationButton>
          ) : null}
          {currentPage < totalPages ? (
            <StyledPaginationButton
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </StyledPaginationButton>
          ) : null}
        </StyledPaginationContainer>
      </StyledUl>
    </>
  );
}
