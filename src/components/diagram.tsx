import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DiagramContext } from './diagram-context';
import { createDiagram } from '../diagram/create-diagram';

const DiagramWrapper = styled.div`
  width: 100%;
  max-width: 622px;
  height: 400px;
  display: flex;
`;

const DiagramContainer = styled.div`
  flex: 1;

  canvas {
    outline: none;
  }
`;

export const Diagram = () => {
  const { setDiagram } = useContext(DiagramContext);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const diagram = createDiagram(divRef.current!);

    if (process.env['NODE_ENV'] !== 'production') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).diagram = diagram;
    }

    setDiagram(diagram);
  }, [setDiagram]);

  return (
    <DiagramWrapper className="diagram">
      <DiagramContainer ref={divRef} />
    </DiagramWrapper>
  );
};
