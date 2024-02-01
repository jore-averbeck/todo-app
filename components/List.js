import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faBackward,
  faSquareCheck,
  faSquare,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";

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
  color: black;
  font-size: 1.1rem;
  font-weight: bold;
`;

const StyledLi = styled.li`
  background-color: #5aba9c;
  padding: 0.4em;
  margin: 0.5em;
  border-radius: 0.4em;
  display: flex;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;
  align-items: center;

  &:hover {
    transform: translateX(4px);
  }
`;

const StyledHeartButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: auto;
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
  font-size: 1 em;
  margin-bottom: -1rem;
  background: transparent;
  border: none;
`;

const StyledCheckButton = styled.span`
  align-self: flex-end;
  font-size: 1.5em;
`;

const StyledDeleteButton = styled.button`
  background: transparent;
  border: none;
  &:hover {
    transform: translateX(3px);
  }
`;
const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 1.2rem;
  &:hover {
    color: #f45d48;
  }
`;

const StyledPagIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

export default function List({ todos, onDelete, onToggleDone, done }) {
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
            {todo.name}
            <StyledHeartButton
              onClick={(event) => event && onToggleDone(todo._id, event)}
            >
              <StyledCheckButton>
                {done.includes(todo._id) ? (
                  <FontAwesomeIcon icon={faSquareCheck} />
                ) : (
                  <FontAwesomeIcon icon={faSquare} />
                )}
              </StyledCheckButton>
            </StyledHeartButton>
            <StyledDeleteButton onClick={() => onDelete(todo._id)}>
              <StyledIcon icon={faEraser} />
            </StyledDeleteButton>
          </StyledLi>
        ))}
        <StyledPaginationContainer>
          {currentPage > 1 ? (
            <StyledPaginationButton
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <StyledPagIcon icon={faBackward} />
            </StyledPaginationButton>
          ) : null}
          {currentPage < totalPages ? (
            <StyledPaginationButton
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <StyledPagIcon icon={faForward} />
            </StyledPaginationButton>
          ) : null}
        </StyledPaginationContainer>
      </StyledUl>
    </>
  );
}
