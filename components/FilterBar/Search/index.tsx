import { debounce } from 'lodash';

interface Props {
  setRecipientName: (name: string) => void;
}

export default function FilterBarSearch({ setRecipientName }: Props) {

  function handleChange(name: string) {
    setRecipientName(name);
  }

  return (
    <div className="flex flex-row bg-primary/10 rounded-xl">
      <div className="bg-white rounded-xl p-2 pr-4 shadow-light">
        <div className="text-xs text-primary/30">Look up by</div>
        <div className="text-base">Customer name</div>
      </div>
      <input onChange={(e) => handleChange(e.target.value)} className="px-2 pl-4 bg-transparent outline-0 placeholder-primary/60 grow-1" type="text" placeholder="Start your search..." />
    </div>
  )
}