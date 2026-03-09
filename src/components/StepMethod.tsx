import type { ImplementationMethod } from '../data/types';
import { methods } from '../data/flowchart';

interface StepMethodProps {
  method: ImplementationMethod;
}

export function StepMethod({ method }: StepMethodProps) {
  const info = methods[method];

  return (
    <div>
      <p className="text-sm text-gray-600 mb-4">
        Based on your selections, here is the recommended implementation approach:
      </p>
      <div className="rounded-xl bg-gradient-to-r from-amp-indigo/5 to-amp-purple/5 border border-amp-indigo/20 p-5">
        <h3 className="text-base font-bold text-amp-indigo">{info.label}</h3>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">{info.description}</p>
        {info.docsUrl && (
          <a
            href={info.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amp-indigo hover:underline"
          >
            View documentation
            <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
    </div>
  );
}
