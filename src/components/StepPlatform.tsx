import type { Platform } from '../data/types';
import { platforms } from '../data/flowchart';
import { Tile } from './Tile';

interface StepPlatformProps {
  selected: Platform | null;
  onSelect: (platform: Platform) => void;
}

export function StepPlatform({ selected, onSelect }: StepPlatformProps) {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-4">
        Which platform is your application built on?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {platforms.map((p) => (
          <Tile
            key={p.id}
            label={p.label}
            description={p.description}
            selected={selected === p.id}
            onClick={() => onSelect(p.id)}
          />
        ))}
      </div>
    </div>
  );
}
