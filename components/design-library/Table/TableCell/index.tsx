import React from 'react';
import { GridNode } from "@react-types/grid";
import { TableState } from "@react-stately/table";
import { mergeProps, useFocusRing, useTableCell, AriaTableCellProps } from 'react-aria';

interface Props {
  cell: GridNode<object>;
  state: TableState<object>;
}

export default function TableCell({ cell, state }: Props) {
  let ref = React.useRef(null);
  const tableCellProps: AriaTableCellProps = {
    node: cell
  };
  let { gridCellProps } = useTableCell(tableCellProps, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <td
      className="p-4"
      {...mergeProps(gridCellProps, focusProps)}
      style={{
        outline: isFocusVisible ? '2px solid orange' : 'none',
        cursor: 'default'
      }}
      ref={ref}
    >
      {cell.rendered}
    </td>
  );
}