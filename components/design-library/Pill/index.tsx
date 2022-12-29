import classnames from 'classnames';

interface Props {
  name: string;
  value: JSX.Element;
  onDismiss?: () => void;
  dismissable?: boolean;
}

export default function Pill({ name, value, dismissable=false, onDismiss }: Props) {
  const dismissableClasses = dismissable ? 'hover:pr-[30px] transition-all' : '';

  return (
    <div className={classnames("relative bg-white rounded-full inline-block py-1 px-4 border-2 text-sm font-medium shadow-light group flex flex-nowrap", dismissableClasses)}>
      <div className="mr-1">{name}</div>
      <div className="shrink-0 max-w-[200px] truncate">{value}</div>
      { dismissable &&
        <button className="hidden group-hover:inline absolute top-[5px] right-[6px] rounded-full bg-[#fef1f1] font-mono font-thin text-base text-pending leading-none py-0 pb-[2px] px-[5px]" onClick={onDismiss}>x</button>
      }
    </div>
  )
}