import type { ContentItem } from '../data/types';

interface LinkedItemProps {
  item: ContentItem;
}

export function LinkedItem({ item }: LinkedItemProps) {
  if (typeof item === 'string') {
    return <>{item}</>;
  }

  return (
    <>
      {item.text}
      {item.link && (
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
    </>
  );
}
