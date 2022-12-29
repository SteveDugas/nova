export enum VerticalSpacingSize {
  SMALL = 'mb-1',
  MEDIUM = 'mb-3',
}

interface Props {
  children: JSX.Element[];
  size?: VerticalSpacingSize;
}

export default function VarticalSpacing({ children, size=VerticalSpacingSize.MEDIUM }: Props) {
  return (
    <div>
      {children.map((child, idx) => {
        return (
          <div key={idx} className={size}>{child}</div>
        )
      })}
    </div>
  )
}