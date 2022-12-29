import React from 'react';
import { mergeProps, useFocusRing, useTableCell } from 'react-aria';

interface Props {
  cell: any;
  state: any;
}

export default function TableCell({ cell, state }: Props) {
  let ref = React.useRef(null);
  let { gridCellProps } = useTableCell({ node: cell }, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <td
      {...mergeProps(gridCellProps, focusProps)}
      style={{
        padding: '5px 10px',
        outline: isFocusVisible ? '2px solid orange' : 'none',
        cursor: 'default'
      }}
      ref={ref}
    >
      {cell.rendered}
    </td>
  );
}