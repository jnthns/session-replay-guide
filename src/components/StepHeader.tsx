interface StepHeaderProps {
  number: number;
  title: string;
  status: 'active' | 'completed' | 'upcoming';
  summary?: string;
  onEdit?: () => void;
}

export function StepHeader({ number, title, status, summary, onEdit }: StepHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className={`
          flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold
          ${status === 'completed' ? 'bg-amp-indigo text-white' : ''}
          ${status === 'active' ? 'bg-amp-indigo text-white ring-4 ring-amp-indigo/20' : ''}
          ${status === 'upcoming' ? 'bg-gray-200 text-gray-400' : ''}
        `}
      >
        {status === 'completed' ? '\u2713' : number}
      </span>
      <div className="flex-1 min-w-0">
        <h2
          className={`text-lg font-semibold ${
            status === 'upcoming' ? 'text-gray-400' : 'text-amp-blue'
          }`}
        >
          {title}
        </h2>
        {status === 'completed' && summary && (
          <div className="flex items-center gap-2 mt-0.5">
            <span className="inline-block rounded-full bg-amp-indigo/10 px-3 py-0.5 text-xs font-medium text-amp-indigo">
              {summary}
            </span>
            {onEdit && (
              <button
                onClick={onEdit}
                className="text-xs text-amp-indigo hover:underline cursor-pointer"
              >
                Change
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
