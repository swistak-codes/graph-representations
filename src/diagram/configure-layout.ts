// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cola from 'cytoscape-cola';
import cytoscape, { Core } from 'cytoscape';

cytoscape.use(cola);

export const configureLayout = (diagram: Core) => {
  const runLayout = () => diagram.layout({ name: 'cola' }).run();

  diagram.on('add', 'node', runLayout);

  diagram.on('ehcomplete', runLayout);
};
