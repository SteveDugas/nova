interface Props {
  name: string;
  value: JSX.Element;
  onDismiss: () => void;
  dismissable: boolean;
}

export default function Pill({ name, value, dismissable, onDismiss }: Props) {
  return (
    <div>
      <div>{name} {value}</div>
      { dismissable &&
        <button onClick={onDismiss}>x</button>
      }
    </div>
  )
}