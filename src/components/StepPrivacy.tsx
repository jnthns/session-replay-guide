import type { ContentItem } from '../data/types';
import { privacyContent } from '../data/content';
import { CodeBlock } from './CodeBlock';

export function StepPrivacy() {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-5">{privacyContent.intro}</p>
      <div className="space-y-5">
        {privacyContent.sections.map((section, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold text-amp-blue mb-2">{section.heading}</h3>
            {'body' in section && section.body && (
              <p className="text-sm text-gray-700 mb-2">{section.body}</p>
            )}
            {'code' in section && section.code && (
              <div className="mb-3">
                <CodeBlock code={section.code} language="javascript" />
              </div>
            )}
            {'items' in section && section.items && (
              <ul className="space-y-1.5">
                {(section.items as ContentItem[]).map((item, j) => {
                  const text = typeof item === 'string' ? item : item.text;
                  const hasBold = text.includes(':');
                  return (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amp-indigo" />
                      <span>
                        {hasBold ? (
                          <>
                            <strong className="text-amp-blue">{text.split(':')[0]}:</strong>
                            {text.substring(text.indexOf(':') + 1)}
                          </>
                        ) : (
                          text
                        )}
                        {typeof item !== 'string' && item.link && (
                          <>
                            {' '}
                            <a
                              href={item.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-0.5 font-medium text-amp-indigo hover:underline"
                            >
                              {item.link.label}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
