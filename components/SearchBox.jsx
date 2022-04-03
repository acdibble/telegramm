import { BackArrow, Ex, Hamburger, MagnifyingGlass } from './svgs';

export default function SearchBox({ inputRef, value, setValue }) {
  return (
    <div className="flex h-14 items-center pl-[13px] pr-4 pt-[6px] pb-2 space-x-3 space-x-reverse relative flex-row-reverse">
      <input
        ref={inputRef}
        id="search"
        type="text"
        className="w-full h-full rounded-3xl bg-stone-800 peer focus:border-purple-400/75 transition-all focus:border-2 outline-none text-slate-200 pl-10 placeholder:text-transparent focus:bg-stone-900 font-light"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="hover:bg-stone-500/10 transition-all rounded-full h-[42px] min-w-[42px] flex items-center justify-center peer-focus:text-transparent peer-focus:invisible text-gray-400 peer-focus:rotate-180">
        <Hamburger />
      </div>
      <div className="absolute transition-all left-[13px] rounded-full h-[42px] min-w-[42px] items-center justify-center flex text-transparent peer-focus:text-gray-400 peer-focus:hover:bg-stone-500/10 -rotate-180 peer-focus:rotate-0 invisible peer-focus:visible">
        <BackArrow />
      </div>
      <div className="absolute left-[80px] text-stone-600 peer-focus:text-purple-400/75 transition-all">
        <MagnifyingGlass />
      </div>
      <label
        htmlFor="search"
        className="absolute left-[110px] text-transparent peer-placeholder-shown:text-stone-600"
      >
        Search
      </label>
      <button
        onClick={() => setValue('')}
        className="absolute right-2 transition-all text-slate-300/50 hover:bg-slate-100/5 rounded-full flex items-center justify-center h-[34px] w-[34px] peer-placeholder-shown:text-transparent peer-placeholder-shown:bg-transparent peer-placeholder-shown:invisible"
      >
        <Ex />
      </button>
    </div>
  );
}
