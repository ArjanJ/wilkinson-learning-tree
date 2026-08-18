# Security backport

This local compatibility package is based on `webpack-dev-middleware` 3.7.3
and preserves its CommonJS API and Node 6+ runtime support for Gatsby 2 and
webpack-dev-server 3.

It applies the path-validation security fix released as
`webpack-dev-middleware` 5.3.4 for GHSA-wr3j-pwj9-hqq6 / CVE-2024-29180.
The adapted upstream fix is from commit
e10008c762e4d5821ed6990348dabf0d4d93a10e.

The compatibility package also uses its own minimal logger adapter instead of
`webpack-log` 2. `webpack-log` requires the vulnerable `uuid` 3 line and has no
release that both removes `uuid` and preserves this package's Node 6 runtime
contract. The adapter retains the log-level, timestamp, name, and color surface
used by the middleware without generating identifiers.
