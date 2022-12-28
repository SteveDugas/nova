interface Props {
  children: string | JSX.Element;
}

export default function Header({ children }: Props) {
  return (
    <h1 className="text-3xl font-medium">{children}</h1>
  )
};