export const DAILY_LIMIT_CENTS = 100;
export const ACTION_LIMIT_CENTS = 20;
export const GRANT_TOTAL_CENTS = 40;

// Illustrative fixture quotes, not a live purchase or a connection to the app.
export const exampleRequests = {
  snapshot: { resource: "Market Snapshot", cents: 20 },
  analysis: { resource: "Market Analysis", cents: 2000 },
} as const;

export function evaluateRequest(cents: number) {
  return {
    allowed: Number.isInteger(cents) && cents >= 0 && cents <= ACTION_LIMIT_CENTS && cents <= GRANT_TOTAL_CENTS && cents <= DAILY_LIMIT_CENTS,
    boundedCents: Number.isFinite(cents)
      ? Math.max(0, Math.min(cents, ACTION_LIMIT_CENTS, DAILY_LIMIT_CENTS))
      : 0,
  };
}

export function amount(cents: number) {
  return (cents / 100).toFixed(2);
}

export function testUsdc(cents: number) {
  return `${amount(cents)} test USDC`;
}
