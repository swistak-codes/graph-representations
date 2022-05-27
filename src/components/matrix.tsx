type Props = {
  matrix: number[][];
  columnsLabel: string;
  rowsLabel: string;
};

export const Matrix = ({ matrix, columnsLabel, rowsLabel }: Props) => {
  if (matrix.length < 1 || matrix[0].length < 1) {
    return <code>[ ]</code>;
  }

  return (
    <table>
      <tr>
        <th></th>
        {matrix[0].map((_, i) => (
          <th scope="col" key={`header${i}`}>
            {columnsLabel}
            <sub>{i}</sub>
          </th>
        ))}
      </tr>
      {matrix.map((row, i) => (
        <tr key={`row${i}`}>
          <th scope="row">
            {rowsLabel}
            <sub>{i}</sub>
          </th>
          {row.map((x, j) => (
            <td key={`${i},${j}`}>
              <code>{x}</code>
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};
