import { Core } from 'cytoscape';

export const configureStyles = (diagram: Core) => {
  diagram
    .style()
    // @ts-ignore
    .clear()
    .selector('node')
    .style({
      'background-color': 'yellow',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'black',
      label: 'data(id)',
      'text-halign': 'center',
      'text-valign': 'center',
    })
    .selector('edge')
    .style({
      'line-fill': 'linear-gradient',
      'line-color': '#ccc',
      'target-arrow-color': '#ccc',
      'target-arrow-shape': 'triangle',
      width: '1',
      'curve-style': 'bezier',
    });
};
