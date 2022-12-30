import React from 'react';
import { useTableColumnHeader, useFocusRing, mergeProps } from 'react-aria';

interface Props {
  column: any;
  state: any;
}

export default function TableColumnHeader({ column, state }: Props) {
  let ref = React.useRef(null);
  let { columnHeaderProps } = useTableColumnHeader(
    { node: column },
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
        textAlign: column.colspan > 1 ? 'center' : 'left',
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