import React from 'react';
import {useTableHeaderRow} from 'react-aria';

interface Props {
  item: any;
  state: any;
  children: JSX.Element[];
}

export default function TableHeaderRow({ item, state, children }: Props) {
  let ref = React.useRef(null);
  let { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  return (
    <tr {...rowProps} ref={ref} className="border-b border-tableBorder">
      {children}
    </tr>
  );
}