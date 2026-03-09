import type { Platform, AnalyticsSource } from '../data/types';
import { getSourcesForPlatform } from '../data/flowchart';
import { Tile } from './Tile';

interface StepSourceProps {
  platform: Platform;
  selected: AnalyticsSource | null;
  onSelect: (source: AnalyticsSource) => void;
}

export function StepSource({ platform, selected, onSelect }: StepSourceProps) {
  const options = getSourcesForPlatform(platform);

  return (
    <div>
      <p className="text-sm text-gray-600 mb-4">
        How are you currently sending analytics data to Amplitude?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((s) => (
          <Tile
            key={s.id}
            label={s.label}
            description={s.description}
            selected={selected === s.id}
            onClick={() => onSelect(s.id)}
          />
        ))}
      </div>
    </div>
  );
}
