import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Core } from 'cytoscape';

type Context = {
  diagram: Core | null;
  setDiagram: Dispatch<SetStateAction<Core | null>>;
  nodes: string[];
  edges: [string, string][];
};

type ContextProviderProps = {
  children: ReactNode;
};

export const DiagramContext = createContext<Context>({
  diagram: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDiagram: () => {},
  nodes: [],
  edges: [],
});

export const DiagramContextProvider = ({ children }: ContextProviderProps) => {
  const [diagram, setDiagram] = useState<Core | null>(null);
  const [nodes, setNodes] = useState<string[]>([]);
  const [edges, setEdges] = useState<[string, string][]>([]);

  useEffect(() => {
    if (diagram) {
      diagram.on('add remove', (e) => {
        setNodes(e.cy.nodes().map((x) => x.id()));
        setEdges(e.cy.edges().map((x) => [x.source().id(), x.target().id()]));
      });
    }
  }, [diagram]);

  return (
    <DiagramContext.Provider value={{ diagram, setDiagram, nodes, edges }}>
      {children}
    </DiagramContext.Provider>
  );
};
