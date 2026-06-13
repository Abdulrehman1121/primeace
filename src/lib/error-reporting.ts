/**
 * PrimeAce Tech Production Error Logger
 * Intercepts uncaught runtime failures and React boundary exceptions.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  // Log detailed warning in console for local developers
  console.error("PrimeAce Application Exception Intercepted:", {
    error,
    route: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...context,
  });

  // Future integration: send exception to your logging backend (e.g. Sentry/LogRocket/custom PHP logger)
}
