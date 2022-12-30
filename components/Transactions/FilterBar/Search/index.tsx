interface Props {
  setRecipientName: (name: string) => void;
  recipientName: string;
}

export default function FilterBarSearch({ setRecipientName, recipientName }: Props) {
  function handleChange(name: string) {
    setRecipientName(name);
  }

  return (
    <div className="flex flex-row bg-primary/10 rounded-xl min-w-[340px]">
      <div className="bg-white rounded-xl p-2 pr-4 shadow-light">
        <div className="text-xs text-primary/30">Look up by</div>
        <div className="text-base">Customer name</div>
      </div>
      <input
        value={recipientName}
        onChange={(e) => handleChange(e.target.value)}
        className="px-2 pl-4 bg-transparent outline-0 placeholder-primary/60 grow-1 max-h-14"
        type="text"
        placeholder="Start your search..."
      />
    </div>
  )
}