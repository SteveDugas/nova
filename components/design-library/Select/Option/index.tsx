interface Props {
  value: string;
  children: string | JSX.Element;
}

export default function Option({ value, children }: Props) {
  return (
    <option value={value}>{children}</option>
  )
}