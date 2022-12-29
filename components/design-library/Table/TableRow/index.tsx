import React from 'react';
import { useTableRow, useFocusRing, mergeProps } from 'react-aria';

interface Props {
  item: any,
  children: JSX.Element[];
  state: any;
}

export default function TableRow({ item, children, state }: Props) {
  let ref = React.useRef(null);
  let isSelected = state.selectionManager.isSelected(item.key);
  let { rowProps, isPressed } = useTableRow(
    {
      node: item
    },
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <tr
      style={{
        background: isSelected ? 'blueviolet' : isPressed
          ? 'var(--spectrum-global-color-gray-400)'
          : item.index % 2
          ? 'var(--spectrum-alias-highlight-hover)'
          : 'none',
        color: isSelected ? 'white' : undefined,
        outline: isFocusVisible ? '2px solid orange' : 'none'
      }}
      {...mergeProps(rowProps, focusProps)}
      ref={ref}
    >
      {children}
    </tr>
  );
}