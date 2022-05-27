export const getIncidenceMatrix = (
  nodes: string[],
  edges: [string, string][]
) => {
  const matrix = Array(nodes.length)
    .fill(0)
    .map(() => Array(edges.length).fill(0));

  edges.forEach(([from, to], i) => {
    matrix[parseInt(from)][i] = -1;
    matrix[parseInt(to)][i] = 1;
  });

  return matrix;
};
