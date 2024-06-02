import { IoSearchOutline } from "react-icons/io5"

export const SearchInput = () => {
  return (
    <div className="text-black mb-4 flex items-center p-1 w-full bg-zinc-100 border">
    <button>
      <IoSearchOutline className="size-5" />
    </button>
    <input
      type="search"
      className="p-1 outline-none bg-transparent text-lg flex-1"
      placeholder="Search"
    />
  </div>

  )
}