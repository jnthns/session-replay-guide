import type { Callout } from '../data/types';
import { CalloutCard } from './CalloutCard';

interface CalloutListProps {
  callouts: Callout[];
}

export function CalloutList({ callouts }: CalloutListProps) {
  if (callouts.length === 0) return null;

  const sorted = [...callouts].sort((a, b) => {
    const order: Record<string, number> = { critical: 0, warning: 1, tip: 2 };
    return order[a.type] - order[b.type];
  });

  return (
    <div className="mt-6 space-y-3">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Things to Know
      </h3>
      {sorted.map((c, i) => (
        <CalloutCard key={i} type={c.type} title={c.title} body={c.body} link={c.link} />
      ))}
    </div>
  );
}
