import { useContext, useEffect, useState } from 'react';
import { DiagramContext } from './diagram-context';
import { isValidEdgeList } from '../logic/is-valid-edge-list';
import { getIncidenceMatrix } from '../logic/get-incidence-matrix';
import { Matrix } from './matrix';

export const IncidenceMatrix = () => {
  const [currentList, setCurrentList] = useState<number[][]>([]);
  const { nodes, edges } = useContext(DiagramContext);

  useEffect(() => {
    if (isValidEdgeList(edges)) {
      setCurrentList(getIncidenceMatrix(nodes, edges));
    }
  }, [nodes, edges, setCurrentList]);

  return <Matrix matrix={currentList} columnsLabel="E" rowsLabel="V" />;
};
