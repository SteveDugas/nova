import classnames from 'classnames';

interface Props {
  children: string | JSX.Element;
  className?: string;
  index: number;
}

let COLORS = [
  'bg-[#005f73] text-white',
  'bg-[#0a9396] text-white',
  'bg-[#94d2bd] text-white',
  'bg-[#e9d8a6] text-[#1c1c1c]',
]

export default function ColorPill({ children, className='', index=0 }: Props) {
  const colorIndex = (index+1)%COLORS.length;
  const color = COLORS[colorIndex];

  return (
    <div className={classnames("rounded-full bg-white inline-block px-4 py-1 font-medium", color, className)}>{children}</div>
  )
}