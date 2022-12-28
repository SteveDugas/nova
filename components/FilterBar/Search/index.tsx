export default function FilterBarSearch() {

  return (
    <div className="flex flex-row bg-gray-200">
      <div className="bg-white rounded-lg p-2 pr-4">
        <div className="text-sm">Look up by</div>
        <div className="text-base">Customer name</div>
      </div>
      <input className="px-2 pl-4 bg-transparent outline-0" type="text" placeholder="Start your search..." />
    </div>
  )
}