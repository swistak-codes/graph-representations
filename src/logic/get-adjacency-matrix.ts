export const getAdjacencyMatrix = (
  nodes: string[],
  edges: [string, string][]
) => {
  const matrix = Array(nodes.length)
    .fill(0)
    .map(() => Array(nodes.length).fill(0));

  edges.forEach(([from, to]) => (matrix[parseInt(from)][parseInt(to)] = 1));

  return matrix;
};
