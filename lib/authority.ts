export const DAILY_LIMIT_CENTS = 100;
export const ACTION_LIMIT_CENTS = 20;

export function evaluateRequest(cents: number) {
  return {
    allowed: Number.isFinite(cents) && cents >= 0 && cents <= ACTION_LIMIT_CENTS && cents <= DAILY_LIMIT_CENTS,
    boundedCents: Number.isFinite(cents)
      ? Math.max(0, Math.min(cents, ACTION_LIMIT_CENTS, DAILY_LIMIT_CENTS))
      : 0,
  };
}

export function dollars(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}
