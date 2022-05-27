import styled from 'styled-components';
import { useState } from 'react';
import { EdgeList } from './edge-list';
import { AdjacencyList } from './adjacency-list';
import { AdjacencyMatrix } from './adjacency-matrix';
import { IncidenceMatrix } from './incidence-matrix';

const RepresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SelectorContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  button {
    cursor: pointer;

    &:disabled {
      cursor: default;
      background: hsl(60, 60%, 50%);
      color: black;
    }
  }
`;

const enum RepresentationType {
  EdgeList,
  AdjacencyList,
  AdjacencyMatrix,
  IncidenceMatrix,
}

const typeToComponent = {
  [RepresentationType.EdgeList]: EdgeList,
  [RepresentationType.AdjacencyList]: AdjacencyList,
  [RepresentationType.AdjacencyMatrix]: AdjacencyMatrix,
  [RepresentationType.IncidenceMatrix]: IncidenceMatrix,
};

const types = [
  { type: RepresentationType.EdgeList, name: 'Lista krawędzi' },
  { type: RepresentationType.AdjacencyList, name: 'Lista sąsiedztwa' },
  { type: RepresentationType.AdjacencyMatrix, name: 'Macierz sąsiedztwa' },
  { type: RepresentationType.IncidenceMatrix, name: 'Macierz incydencji' },
];

export const Representation = () => {
  const [currentRepresentation, setCurrentRepresentation] = useState(
    RepresentationType.EdgeList
  );

  const CurrentComponent = typeToComponent[currentRepresentation];

  return (
    <RepresentationContainer>
      <SelectorContainer>
        {types.map(({ type, name }) => (
          <button
            key={type}
            onClick={() => setCurrentRepresentation(type)}
            disabled={currentRepresentation === type}
          >
            {name}
          </button>
        ))}
      </SelectorContainer>
      <CurrentComponent />
    </RepresentationContainer>
  );
};
