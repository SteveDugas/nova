import React from 'react';
import { GridNode } from "@react-types/grid";
import { TableState } from "@react-stately/table";
import { useTableColumnHeader, useFocusRing, mergeProps, AriaTableColumnHeaderProps } from 'react-aria';

interface Props {
  column: GridNode<object>;
  state: TableState<object>;
}

export default function TableColumnHeader({ column, state }: Props) {
  let ref = React.useRef(null);
  const tableColumnHeaderProps: AriaTableColumnHeaderProps<object> = {
    node: column,
  };
  let { columnHeaderProps } = useTableColumnHeader(
    tableColumnHeaderProps,
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();
  let arrowIcon = state.sortDescriptor?.direction === 'ascending' ? '▲' : '▼';

  return (
    <th
      className="p-4 font-medium"
      {...mergeProps(columnHeaderProps, focusProps)}
      colSpan={column.colspan}
      style={{
        textAlign: column.colspan && column.colspan > 1 ? 'center' : 'left',
        outline: isFocusVisible ? '2px solid orange' : 'none',
        cursor: 'default'
      }}
      ref={ref}
    >
      {column.rendered}
      {column.props.allowsSorting &&
        (
          <span
            aria-hidden="true"
            style={{
              padding: '0 2px',
              visibility: state.sortDescriptor?.column === column.key
                ? 'visible'
                : 'hidden'
            }}
          >
            {arrowIcon}
          </span>
        )}
    </th>
  );
}