interface TileProps {
  label: string;
  description: string;
  selected: boolean;
  recommended?: boolean;
  onClick: () => void;
}

export function Tile({ label, description, selected, recommended, onClick }: TileProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative text-left w-full rounded-xl border-2 p-4 transition-all duration-200
        cursor-pointer hover:shadow-md
        ${
          selected
            ? 'border-amp-indigo bg-white shadow-md ring-2 ring-amp-indigo/20'
            : recommended
              ? 'border-amp-indigo/40 bg-amp-indigo/[0.03] hover:border-amp-indigo/60'
              : 'border-amp-border bg-white hover:border-amp-indigo/40'
        }
      `}
    >
      {selected && (
        <span className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-amp-indigo text-white text-xs">
          &#10003;
        </span>
      )}
      {recommended && !selected && (
        <span className="absolute top-3 right-3 rounded-full bg-amp-indigo/10 px-2 py-0.5 text-[10px] font-semibold text-amp-indigo">
          Recommended
        </span>
      )}
      <span className="block text-sm font-semibold text-amp-blue">{label}</span>
      <span className="mt-1 block text-xs text-gray-500 leading-relaxed">{description}</span>
    </button>
  );
}
