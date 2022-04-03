export default function Contact({ name, onClick, active, index }) {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`w-full h-[72px] flex items-center p-[9px] rounded-2xl ${
        active ? 'bg-purple-400/75' : 'hover:bg-stone-800'
      }`}
    >
      <img src={`/${name}.jpg`} className="h-[54px] w-[54px] rounded-full object-cover mr-2" />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex justify-between">
          <div className="font-bold capitalize text-stone-200">{name}</div>
          <div className={`text-stone-${active ? 200 : 400} text-xs`}>16:20</div>
        </div>
        <div className={`text-stone-${active ? 200 : 300} truncate`}>
          {'Message sample '.repeat(index + 1)}
        </div>
      </div>
    </div>
  );
}
