// The library initializes PostHog analytics as a side effect of import
// (see packages/iotix-editor/src/index.tsx) — stub it out so E2E runs don't
// depend on network access to posthog.iotix.org (mirrors cypress/support/component.ts).
beforeEach(() => {
  cy.intercept("https://posthog.iotix.org/**", { statusCode: 200, body: {} });
});
