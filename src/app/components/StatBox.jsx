export default function StatBox({
  number = "100%",
  bottomCaption = "",
  topCaption,
  className = "",
}) {
  return (
    <div
      className={`row-span-1 col-span-1 rounded-xl border-2 border-zinc-700/10 bg-zinc-50 p-2 dark:bg-zinc-900  bg-cover bg-black/30 ${className}`}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
        <p className="absolute m-0 top-0 text-sm">{topCaption}</p>
        <h3 className="m-0 text-4xl md:text-6xl tracking-tight">{number}</h3>
        <p className="absolute m-0 bottom-0 text-sm">{bottomCaption}</p>
      </div>
    </div>
  );
}
