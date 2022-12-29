import Option from './Option';

interface Props {
  children: JSX.Element[];
  onChange: (value: string) => void;
  value: string;
}

function Select({ children, onChange, value }: Props) {
  return (
    <select value={value} onChange={(e) => { onChange(e.target.value) }} className="bg-primary/10 p-3 pr-4 rounded-xl">
      {children}
    </select>
  )
}

export {
  Option,
  Select,
}

