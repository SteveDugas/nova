import { useTable, AriaTableProps } from 'react-aria';
import {
  useTableState,
  TableStateProps,
} from 'react-stately';
import {useRef} from 'react';
import TableRowGroup from './TableRowGroup';
import TableHeaderRow from './TableHeaderRow';
import TableColumnHeader from './TableColumnHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';

interface TableProps extends TableStateProps<object>, AriaTableProps<object> {
  style: React.CSSProperties;
}

export default function Table(props: TableProps) {
  let { selectionMode, selectionBehavior } = props;
  const tableStateProps = {
    ...props,
    showSelectionCheckboxes: selectionMode === 'multiple' &&
      selectionBehavior !== 'replace'
  }
  let state = useTableState(tableStateProps);
  let ref = useRef(null);
  let { collection } = state;
  let { gridProps } = useTable(props, state, ref);

  return (
    <table {...gridProps} ref={ref} style={{ borderCollapse: 'collapse', width: '100%' }}>
      <TableRowGroup
        type="thead"
        style={{
          borderBottom: '2px solid var(--spectrum-global-color-gray-800)'
        }}
      >
        {collection.headerRows.map((headerRow) => (
          <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
            {Array.from(headerRow.childNodes).map((column) =>
              (
                <TableColumnHeader
                  key={column.key}
                  column={column}
                  state={state}
                />
              )
            )}
          </TableHeaderRow>
        ))}
      </TableRowGroup>
      <TableRowGroup type="tbody">
        {Array.from(collection.body.childNodes).map((row) => (
          <TableRow key={row.key} item={row} state={state}>
            {Array.from(row.childNodes).map((cell) =>
             <TableCell key={cell.key} cell={cell} state={state} />
            )}
          </TableRow>
        ))}
      </TableRowGroup>
    </table>
  );
}