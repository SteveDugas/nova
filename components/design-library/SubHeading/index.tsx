interface Props {
  children: string | JSX.Element;
}

export default function SubHeading({ children }: Props) {

  return (
    <h2 className="text-base text-primary">{children}</h2>
  )
}