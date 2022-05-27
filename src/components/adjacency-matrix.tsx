import { useContext, useEffect, useState } from 'react';
import { DiagramContext } from './diagram-context';
import { isValidEdgeList } from '../logic/is-valid-edge-list';
import { getAdjacencyMatrix } from '../logic/get-adjacency-matrix';
import { Matrix } from './matrix';

export const AdjacencyMatrix = () => {
  const [currentList, setCurrentList] = useState<number[][]>([]);
  const { nodes, edges } = useContext(DiagramContext);

  useEffect(() => {
    if (isValidEdgeList(edges)) {
      setCurrentList(getAdjacencyMatrix(nodes, edges));
    }
  }, [nodes, edges, setCurrentList]);

  return <Matrix matrix={currentList} columnsLabel="V" rowsLabel="V" />;
};
