export type Adjacency = { id: string; neighbors: string[] };

export const getAdjacencyList = (
  nodes: string[],
  edges: [string, string][]
): Adjacency[] => {
  const adjacencyMap = new Map<string, Set<string>>(
    nodes.map((x) => [x, new Set()])
  );

  edges.forEach(([from, to]) => adjacencyMap.get(from)?.add(to));

  return [...adjacencyMap].map(([key, value]) => ({
    id: key,
    neighbors: [...value],
  }));
};
