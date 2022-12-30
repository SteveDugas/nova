import React from 'react';
import { useTableRow, useFocusRing, mergeProps, GridRowProps } from 'react-aria';
import { TableState } from "@react-stately/table";
import { GridNode } from "@react-types/grid";

interface Props {
  item: GridNode<object>,
  children: JSX.Element[];
  state: TableState<object>;
}

export default function TableRow({ item, children, state }: Props) {
  let ref = React.useRef(null);
  let isSelected = state.selectionManager.isSelected(item.key);
  const tableRowProps: GridRowProps<object> = { node: item };
  let { rowProps, isPressed } = useTableRow(
    tableRowProps,
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <tr
      style={{
        background: isSelected ? 'blueviolet' : isPressed
          ? 'var(--spectrum-global-color-gray-400)'
          : item?.index && item.index % 2
          ? 'var(--spectrum-alias-highlight-hover)'
          : 'none',
        color: isSelected ? 'white' : undefined,
        outline: isFocusVisible ? '2px solid orange' : 'none'
      }}
      {...mergeProps(rowProps, focusProps)}
      ref={ref}
      className="border-b border-tableBorder"
    >
      {children}
    </tr>
  );
}