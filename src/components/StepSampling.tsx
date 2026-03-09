import { samplingContent } from '../data/content';
import { LinkedItem } from './LinkedItem';

export function StepSampling() {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-5">{samplingContent.intro}</p>
      <div className="space-y-5">
        {samplingContent.sections.map((section, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold text-amp-blue mb-2">{section.heading}</h3>
            <ul className="space-y-1.5">
              {section.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amp-indigo" />
                  <span><LinkedItem item={item} /></span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
