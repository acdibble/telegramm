import { MagnifyingGlass, VerticalDots } from './svgs';

export default function TopBar({ contact: { name, lastSeen } }) {
  return (
    <div className="flex h-14 items-center pl-[24px] pr-[13px] py-2 bg-stone-900 w-full justify-between">
      <div className="flex">
        <img
          src={`/${name}.jpg`}
          className="h-[40px] w-[40px] rounded-full object-cover mr-[10px]"
        />
        <div className="flex flex-col">
          <h3 className="capitalize font-bold text-stone-100">{name}</h3>
          <div className="text-stone-400 text-xs">{lastSeen}</div>
        </div>
      </div>
      <div className="flex space-x-3 mr-1">
        <button className="text-stone-400 p-[5px] min-w-[40px] min-h-[40px] hover:bg-stone-800 transition-all rounded-full flex justify-center items-center">
          <MagnifyingGlass />
        </button>
        <button className="text-stone-400 p-[5px] min-w-[40px] min-h-[40px] hover:bg-stone-800 transition-all rounded-full flex justify-center items-center">
          <VerticalDots />
        </button>
      </div>
    </div>
  );
}
