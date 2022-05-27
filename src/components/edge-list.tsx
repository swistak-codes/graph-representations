import { useContext, useEffect, useState } from 'react';
import { DiagramContext } from './diagram-context';
import { isValidEdgeList } from '../logic/is-valid-edge-list';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 0.3rem;
  margin-left: 24px;
`;

export const EdgeList = () => {
  const [currentList, setCurrentList] = useState<[string, string][]>([]);
  const { edges } = useContext(DiagramContext);

  useEffect(() => {
    if (isValidEdgeList(edges)) {
      setCurrentList(edges);
    }
  }, [edges, setCurrentList]);

  return (
    <div>
      <code>[</code>
      <Grid>
        {currentList.map((x, i) => (
          <code key={i}>{JSON.stringify(x)},</code>
        ))}
      </Grid>
      <code>]</code>
    </div>
  );
};
