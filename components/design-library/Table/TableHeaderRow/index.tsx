import React from 'react';
import { useTableHeaderRow, GridRowProps } from 'react-aria';
import { TableState } from "@react-stately/table";
import { GridNode } from "@react-types/grid";

interface Props {
  item: GridNode<object>;
  state: TableState<object>;
  children: JSX.Element[];
}

export default function TableHeaderRow({ item, state, children }: Props) {
  let ref = React.useRef(null);
  let tableHeaderRowProps: GridRowProps<object> = { node: item };
  let { rowProps } = useTableHeaderRow(tableHeaderRowProps, state, ref);

  return (
    <tr {...rowProps} ref={ref} className="border-b border-tableBorder">
      {children}
    </tr>
  );
}