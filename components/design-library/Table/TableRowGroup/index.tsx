import {useTableRowGroup} from 'react-aria';

interface Props {
  type: any;
  style?: any;
  children: JSX.Element[];
}

export default function TableRowGroup({ type: Element, style, children }: Props) {
  let { rowGroupProps } = useTableRowGroup();
  return (
    <Element {...rowGroupProps} style={style}>
      {children}
    </Element>
  );
}