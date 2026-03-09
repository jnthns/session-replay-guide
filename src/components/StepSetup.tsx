import type { ImplementationMethod } from '../data/types';
import { setupContent } from '../data/content';
import { CodeBlock } from './CodeBlock';
import { LinkedItem } from './LinkedItem';

interface StepSetupProps {
  method: ImplementationMethod;
}

export function StepSetup({ method }: StepSetupProps) {
  const content = setupContent[method];

  return (
    <div>
      <p className="text-sm text-gray-600 mb-4">
        Follow these steps to install and configure Session Replay.
      </p>

      {content.installCommands.length > 0 && (
        <div className="mb-5">
          <h3 className="text-sm font-semibold text-amp-blue mb-2">Installation</h3>
          <div className="space-y-2">
            {content.installCommands.map((cmd, i) => (
              <CodeBlock key={i} code={cmd} language={cmd.startsWith('//') ? undefined : 'shell'} />
            ))}
          </div>
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-sm font-semibold text-amp-blue mb-2">Implementation</h3>
        <CodeBlock code={content.codeSnippet} language={content.language} />
      </div>

      {content.notes.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-amp-blue mb-2">Notes</h3>
          <ul className="space-y-1.5">
            {content.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amp-indigo" />
                <span><LinkedItem item={note} /></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
