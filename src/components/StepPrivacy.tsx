import { useState } from 'react';
import type { ContentItem } from '../data/types';
import type { PrivacyGroup, PrivacySection } from '../data/content';
import { privacyContent } from '../data/content';
import { CodeBlock } from './CodeBlock';

/* ── ELI5 comparison data ────────────────────────────────────────── */

interface Approach {
  label: string;
  icon: string;
  color: { bg: string; border: string; badge: string; accent: string };
  persona: string;
  loe: string;
  benefit: string;
  controls: string[];
}

const approaches: Approach[] = [
  {
    label: 'Dashboard',
    icon: '\u{1F6E1}\uFE0F',
    color: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-700',
      accent: 'text-blue-700',
    },
    persona: 'Project Admin, Privacy/Compliance lead, Product Manager — anyone with Admin access in Amplitude.',
    loe: 'Minutes. No code, no deploy, no engineering sprint. Changes propagate within minutes.',
    benefit: 'Fast iteration on masking rules without waiting on engineering. Overrides SDK settings, so compliance teams keep final say.',
    controls: [
      'Three preset masking levels (Conservative, Medium, Light)',
      'Per-element CSS selector overrides (mask, unmask, exclude)',
      'Remote sample rate override',
    ],
  },
  {
    label: 'SDK / Code',
    icon: '\u{1F4BB}',
    color: {
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      badge: 'bg-violet-100 text-violet-700',
      accent: 'text-violet-700',
    },
    persona: 'Front-end / mobile engineer who owns the Amplitude SDK integration.',
    loe: 'Requires a code change and deploy. Plan for a PR review cycle. Updates only take effect after the next release.',
    benefit: 'Fine-grained, programmatic control baked into the codebase. Ideal for dynamic UIs, hashed class names, and CI-enforced privacy policies.',
    controls: [
      'privacyConfig — defaultMaskLevel, blockSelector, maskSelector, unmaskSelector',
      'CSS classes — amp-mask, amp-unmask, amp-block in markup',
      'Page-level exclusion via amplitude.remove() or sessionReplay.shutdown()',
      'Feature-flag integration for user-segment control',
    ],
  },
];

function ELI5Panel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-amp-border bg-amp-light mb-5 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left cursor-pointer hover:bg-amp-border/40 transition-colors"
      >
        <span className="text-sm font-semibold text-amp-blue flex items-center gap-2">
          <span aria-hidden="true">&#128218;</span>
          ELI5 — Dashboard vs SDK privacy controls
        </span>
        <span
          className={`text-xs text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          &#9660;
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-4">
          <p className="text-xs text-gray-500">
            Amplitude gives two audiences control over what gets captured. Here's who does what, how much effort it takes, and why it matters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {approaches.map((a) => (
              <div
                key={a.label}
                className={`rounded-lg border ${a.color.border} ${a.color.bg} p-4 space-y-3`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base" aria-hidden="true">{a.icon}</span>
                  <span className={`text-sm font-bold ${a.color.accent}`}>{a.label}</span>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">Who</p>
                  <p className="text-sm text-gray-700">{a.persona}</p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">Effort</p>
                  <p className="text-sm text-gray-700">{a.loe}</p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-0.5">Why it matters</p>
                  <p className="text-sm text-gray-700">{a.benefit}</p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-1">What you control</p>
                  <ul className="space-y-1">
                    {a.controls.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 italic">
            Dashboard settings always override SDK settings when they conflict. Use the dashboard for quick, org-wide policy; use the SDK for precise, code-level control.
          </p>
        </div>
      )}
    </div>
  );
}

/* ── Group styles ────────────────────────────────────────────────── */

const groupStyles: Record<string, { badge: string; border: string; icon: string }> = {
  admin: {
    badge: 'bg-blue-100 text-blue-700',
    border: 'border-blue-200',
    icon: '\u{1F6E1}\uFE0F',
  },
  developer: {
    badge: 'bg-violet-100 text-violet-700',
    border: 'border-violet-200',
    icon: '\u{1F4BB}',
  },
  compliance: {
    badge: 'bg-gray-100 text-gray-600',
    border: 'border-gray-200',
    icon: '\u{1F4C4}',
  },
};

function renderItems(items: ContentItem[]) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, j) => {
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
  );
}

function renderSection(section: PrivacySection) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-amp-blue mb-2">{section.heading}</h4>
      {section.body && (
        <p className="text-sm text-gray-700 mb-2">{section.body}</p>
      )}
      {section.code && (
        <div className="mb-3">
          <CodeBlock code={section.code} language={section.codeLanguage ?? 'javascript'} />
        </div>
      )}
      {section.items && renderItems(section.items)}
    </div>
  );
}

function renderGroup(group: PrivacyGroup) {
  const style = groupStyles[group.id] ?? groupStyles.compliance;
  return (
    <div
      key={group.id}
      className={`rounded-xl border ${style.border} bg-white p-5`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-base" aria-hidden="true">{style.icon}</span>
        <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${style.badge}`}>
          {group.label}
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-4">{group.description}</p>
      <div className="space-y-5">
        {group.sections.map((section, i) => (
          <div key={i}>{renderSection(section)}</div>
        ))}
      </div>
    </div>
  );
}

export function StepPrivacy() {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-4">{privacyContent.intro}</p>
      <ELI5Panel />
      <p className="text-xs text-gray-500 bg-amp-light border border-amp-border rounded-lg px-3 py-2 mb-5">
        <strong className="text-amp-blue">Conflict resolution:</strong> {privacyContent.conflictNote}
      </p>
      <div className="space-y-5">
        {privacyContent.groups.map((group) => renderGroup(group))}
      </div>
    </div>
  );
}
