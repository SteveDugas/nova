import { mergeProps, useFocusRing, useTable } from 'react-aria';
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  useTableState
} from 'react-stately';
import {useRef} from 'react';
import TableRowGroup from '../../TransactionsTable/TableRowGroup';
import TableHeaderRow from '../../TransactionsTable/TableHeaderRow';
import TableColumnHeader from '../../TransactionsTable/TableColumnHeader';
import TableRow from '../../TransactionsTable/TableRow';
import TableCell from '../../TransactionsTable/TableCell';

export default function Table(props: any) {
  let { selectionMode, selectionBehavior } = props;
  let state = useTableState({
    ...props,
    showSelectionCheckboxes: selectionMode === 'multiple' &&
      selectionBehavior !== 'replace'
  });

  let ref = useRef(null);
  let { collection } = state;
  let { gridProps } = useTable(props, state, ref);

  return (
    <table {...gridProps} ref={ref} style={{ borderCollapse: 'collapse' }}>
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