export const getNextId = (nodes: string[]) =>
  `${Math.max(-1, ...nodes.map((x) => parseInt(x))) + 1}`;
