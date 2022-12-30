import classnames from 'classnames';
import { STATUS_COLOR_MAP } from '../../../../../types';

type State = keyof typeof STATUS_COLOR_MAP;

interface Props {
  state: State;
  primary?: boolean;
  onClick: (state: State) => void;
  active: boolean;
}

export default function StatusButton({ state, primary=false, onClick, active }: Props) {
  const bg = primary ? 'bg-white' : 'bg-[#efefef]';
  const bgHover = primary ? 'active:bg-[#efefef]' : 'active:bg-white';
  const activeState = active ? 'border-current' : 'border-[#efefef]';
  const color = STATUS_COLOR_MAP[state];

  return (
    <button
      onClick={() => { onClick(state) }}
      className={classnames(bg, bgHover, color, "rounded-xl py-2 px-4 font-medium border-2 mr-[10px] hover:border-current", activeState)}
    >
      {state}
    </button>
  )
}