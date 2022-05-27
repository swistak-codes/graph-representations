export const isValidEdgeList = (edges: [string, string][]) => {
  return edges.every(([a, b]) => !!a.match(/^\d+$/) && !!b.match(/^\d+$/));
};
