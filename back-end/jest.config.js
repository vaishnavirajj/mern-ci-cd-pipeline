/**
 * Jest configuration for the Node back‑end.  Using the `node` test environment
 * prevents Jest from injecting browser globals such as `window`.
 */
module.exports = {
  testEnvironment: 'node',
};