import { StepPrivacy } from '../components/StepPrivacy';
import { CalloutList } from '../components/CalloutList';
import { getCalloutsForStep } from '../data/callouts';

export function PrivacyPage() {
  const callouts = getCalloutsForStep('privacy', null, null);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-amp-blue">Privacy & Masking Controls</h2>
        <p className="mt-1 text-sm text-gray-500">
          Configure how Session Replay captures and masks sensitive content.
        </p>
      </div>

      <div className="rounded-2xl border border-amp-border bg-white p-6 shadow-sm">
        <StepPrivacy />
      </div>

      {callouts.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-amp-blue mb-3">Important Notes</h3>
          <CalloutList callouts={callouts} />
        </div>
      )}
    </div>
  );
}
