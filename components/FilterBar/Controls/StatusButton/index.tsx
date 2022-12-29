import classnames from 'classnames';

interface Props {
  children: string | JSX.Element;
  primary?: boolean;
  onClick: () => void;
}

export default function StatusButton({ children, primary=false, onClick }: Props) {
  const bg = primary ? 'bg-white' : 'bg-[#efefef]';

  return (
    <button onClick={onClick} className={classnames(bg, "rounded-xl py-2 px-4 font-medium border-2 border-[#efefef] mr-[10px]")}>{children}</button>
  )
}