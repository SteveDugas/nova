interface Props {
  name: string;
  value: JSX.Element;
  onDismiss: () => void;
}

export default function Pill({ name, value, onDismiss }: Props) {
  return (
    <div>
      <div>{name} {value}</div>
      <button>x</button>
    </div>
  )
}