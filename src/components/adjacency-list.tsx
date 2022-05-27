import { useContext, useEffect, useState } from 'react';
import { DiagramContext } from './diagram-context';
import { isValidEdgeList } from '../logic/is-valid-edge-list';
import styled from 'styled-components';
import { Adjacency, getAdjacencyList } from '../logic/get-adjacency-list';

const AdjacencyContainer = styled.div`
  margin-left: 24px;
`;

export const AdjacencyList = () => {
  const [currentList, setCurrentList] = useState<Adjacency[]>([]);
  const { nodes, edges } = useContext(DiagramContext);

  useEffect(() => {
    if (isValidEdgeList(edges)) {
      setCurrentList(getAdjacencyList(nodes, edges));
    }
  }, [nodes, edges, setCurrentList]);

  return (
    <div>
      <code>[</code>
      {currentList.map((adjacency) => (
        <AdjacencyContainer key={adjacency.id}>
          <code>
            {adjacency.id}: {JSON.stringify(adjacency.neighbors)}
          </code>
        </AdjacencyContainer>
      ))}
      <code>]</code>
    </div>
  );
};
