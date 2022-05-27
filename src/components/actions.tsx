import { useContext } from 'react';
import { DiagramContext } from './diagram-context';
import styled from 'styled-components';
import { getNextId } from '../logic/get-next-id';

const ActionsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    cursor: pointer;
  }
`;

export const Actions = () => {
  const { diagram, nodes } = useContext(DiagramContext);

  const handleAddNode = () => {
    if (diagram) {
      diagram.add({
        group: 'nodes',
        data: { id: getNextId(nodes) },
      });
    }
  };

  const handleClear = () => {
    if (diagram) {
      diagram.remove(diagram.nodes());
    }
  };

  return (
    <ActionsContainer>
      <button onClick={handleAddNode}>Dodaj wierzchołek</button>
      <button onClick={handleClear}>Wyczyść</button>
    </ActionsContainer>
  );
};
