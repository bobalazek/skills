# HTTP and API conventions

Load for HTTP endpoints or API client conventions. Start from the accepted API style and existing consumers; REST examples here do not require replacing an established RPC or GraphQL contract. Record accepted rules, observed behavior, and proposals separately. Protocol constraints still apply when local behavior conflicts with them.

## Inspect the existing boundary

Trace a representative endpoint from routing through middleware, input parsing, authorization, domain logic, persistence, response serialization, and client handling. Inspect shared error handling and gateway/CDN behavior, including framework-generated failures. Compare the published schema or OpenAPI description with actual requests and responses. Record supported clients before changing an envelope, field, status, route, or authentication scheme.

For a new endpoint, identify its resource or operation, caller, ownership scope, and effects. Reuse the existing route and data-access structure; additional controller/service/repository layers need an actual responsibility. Keep storage internals and privileged fields out of transport models. A database-generated insert schema may accept fields an API caller must never control.

## Resource and method contract

Choose resource names, collection/item routes, identifiers, and nesting from local practice. Nested routes must verify the parent-child relationship. Business operations such as approval or cancellation can have an explicit operation contract when plain CRUD would hide their effects; do not manufacture a resource solely to enforce a naming preference.

| Method | Contract to define |
| --- | --- |
| `GET` | Retrieve; avoid requested state changes. |
| `HEAD` | GET metadata without response content. |
| `POST` | Process submitted content, including creation or a domain action. |
| `PUT` | Create/replace state at the target URI; specify the writable representation. |
| `DELETE` | Remove the target association; define domain retention separately. |

Safe methods, `PUT`, and `DELETE` are idempotent in their intended effects; repeated responses need not be identical. [HTTP method semantics](https://www.rfc-editor.org/rfc/rfc9110.html#section-9).

For `PATCH`, document the patch media type, allowed fields, absent/null/array behavior, and concurrency policy. Apply its changes atomically; a patch is not inherently idempotent. [PATCH specification](https://www.rfc-editor.org/rfc/rfc5789.html). If adopting JSON Merge Patch, null removes a member and arrays are replaced as values; verify that these semantics fit the domain. [JSON Merge Patch](https://www.rfc-editor.org/rfc/rfc7396.html).

Define bulk behavior separately: per-item authorization, bounded size, all-or-nothing versus partial success, and how a client retries only unfinished effects. For asynchronous operations, specify a status/result resource, ownership checks, expiry, and terminal failure reporting.

## Status and error contract

| Status | Meaning to preserve |
| --- | --- |
| `200` | Successful response with the documented representation. |
| `201` | Created; identify the resource through `Location` or the target URI. |
| `202` | Accepted, processing incomplete. |
| `204` | Successful, without response content. |
| `400` / `422` | Request error / understood content whose instructions cannot be processed. |
| `401` | Invalid/missing credentials; send an applicable `WWW-Authenticate` challenge. |
| `403` / `404` | Refused / absent or intentionally undisclosed resource. |
| `405` | Unsupported resource method; include `Allow`. |
| `409` / `412` | Current-state conflict / failed request precondition. |
| `415` | Unsupported request format. |
| `500` / `502` / `503` / `504` | Internal failure / invalid upstream response / unavailable service / upstream timeout. |

These meanings come from [HTTP status semantics](https://www.rfc-editor.org/rfc/rfc9110.html#section-15). Establish the project's validation mapping and existence-disclosure policy; do not silently change legacy client handling. Use `429` for rate limiting; `Retry-After` can communicate the wait. [Additional HTTP status codes](https://www.rfc-editor.org/rfc/rfc6585.html#section-4).

Keep a consistent error shape across validation, domain rejection, authentication, and unexpected failure. Specify stable machine-readable identifiers, safe human detail, optional field paths, and a diagnostic correlation value where supported. Clients should not parse prose to choose behavior. For REST-style endpoint failures, use the agreed HTTP failure status rather than hiding failure behind a success status and error flag. Other protocols keep their defined mappings: GraphQL can return successful HTTP transport with partial data and execution errors. Do not convert that valid partial response into a transport failure solely because an errors field is present. [GraphQL partial responses](https://http-spec.graphql.org/draft/#sec-Partial-success).

If no error contract exists, evaluate RFC 9457 Problem Details with `application/problem+json`. It supplies standard members and extension rules; an existing compatible error format can remain. Describe any field-error extension and avoid exposing credentials, SQL, stack traces, or another caller's data. [Problem Details, including security considerations](https://www.rfc-editor.org/rfc/rfc9457.html).

## Input, access, and collection queries

Validate route/query/body values and supported media types at the server boundary. Decide unknown-field handling, coercion, length/range limits, and writable field allowlists. Cap request bodies and expensive nested/bulk inputs using the accepted service limits. Client validation improves feedback but cannot establish server authorization.

Identify public operations explicitly. For protected operations, authenticate the caller and authorize the action, object, and fields before returning data or applying effects. Derive tenant scope from trusted context and verified membership; a supplied tenant ID is a selection to validate. Cover nested resources, count/aggregate endpoints, search, exports, jobs, and batch operations. Test another caller's identifier and privileged fields through the real boundary. [OWASP authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).

Define filter operators, repeated parameters, date boundaries, case/collation behavior, sortable fields, and projection allowlists. Parameterize values and map dynamic field/sort names to trusted expressions; identifiers generally cannot be bound like values. [OWASP query construction guidance](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).

Push supported filtering, ordering, projection, aggregation, and page limits into the database query. Include authorization/tenant predicates there before pagination and apply the same scope to counts and related records. Fetching everything and using array filtering wastes work; filtering only a fetched page can also return wrong totals and omit matches. In-memory processing needs an explicit bounded, already-authorized input or a documented constraint that the data source cannot express. If a permission cannot be expressed in a query, design a bounded authorized candidate-selection strategy and honest pagination/count semantics; never return data on the assumption a client will filter it.

Choose pagination from the workload. Offset pagination supports direct page access for bounded result sets; deeper offsets can increase work. Cursor/keyset pagination needs a deterministic order with a unique tiebreaker, matching comparison rules, and appropriate access paths. Specify null ordering, forward/backward navigation, page-size default/cap, and what concurrent edits can do to traversal. Neither approach alone promises a snapshot. PostgreSQL requires a predictable order for consistent limited subsets and still computes skipped offset rows. [PostgreSQL LIMIT/OFFSET](https://www.postgresql.org/docs/current/queries-limit.html).

Treat a cursor as untrusted input: validate its shape and bounds, bind it to relevant filters/sort scope, and reapply authorization on every page. Opaque encoding is not authorization or confidentiality. Define whether counts are exact, approximate, omitted, or separately requested; do not invent a numeric sentinel without an accepted client contract. Check an empty page and equal sort values as well as ordinary traversal.

## Headers and browser behavior

Document required request headers and response headers at the boundary that emits them, including gateway overrides and error responses. Send the actual response media type. Use HTTPS for credentials and sensitive data, keep secrets out of URLs, and select CORS origins from allowed callers. Browser headers supplement server controls; a checklist of their presence is not a security verdict. [OWASP REST security guidance](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html).

| Concern | Conditional convention and check |
| --- | --- |
| Browser cross-origin access | Configure allowed origins, methods, and headers; handle preflight and expose only response headers the client needs. Credentialed CORS requires an explicit allowed origin, not `*`; test allowed and rejected origins. CORS does not authenticate non-browser callers. [Fetch CORS protocol](https://fetch.spec.whatwg.org/#http-cors-protocol). |
| Response caching | Decide public versus caller-specific storage and freshness. `private` forbids shared-cache storage but permits private caching; `no-cache` requires validation before reuse; `no-store` forbids HTTP cache storage. Review `Vary` and actual CDN keys. [HTTP caching](https://www.rfc-editor.org/rfc/rfc9111.html). |
| Sensitive responses | Keep protected data out of shared or application caches unless authorization scope, keys, invalidation, and staleness are demonstrably correct. `no-store` does not govern every application-managed cache. Test one caller after another on the same cache path. [OWASP REST caching guidance](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#security-headers). |
| MIME and transport policy | Use accurate `Content-Type` and suitable `X-Content-Type-Options: nosniff`. Define HSTS at the HTTPS host boundary only after checking intended host/subdomain coverage. [OWASP HTTP headers](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html). |
| Rendered content | Apply CSP, framing, referrer, and permissions policies to relevant browser-rendered surfaces. API JSON and an HTML documentation/error page have different exposure; test actual content and required functionality. [OWASP header applicability](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html). |

For cookie-authenticated mutations, follow the project's CSRF defense and cookie policy; CORS alone is insufficient. [OWASP CSRF prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html). For custom diagnostic IDs, constrain untrusted values before reflecting or logging them. Verify rate-limit identity and trusted-proxy handling; client-supplied forwarding headers must not bypass limits or authentication.

## Repetition, concurrency, and compatibility

Specify which failures a client can retry, its time budget and attempt cap, and how cancellation or an ambiguous timeout is resolved. Verify intended idempotency against actual database and external effects. A method label cannot repair an implementation that duplicates those effects; a successful response test cannot establish retry behavior.

Where duplicate execution matters, use the existing idempotency mechanism and document its caller/tenant/operation scope, payload comparison, retention, concurrent duplicate behavior, and recovery after interruption. A cache written only after the side effect leaves a duplicate-execution window. Do not promise exactly-once effects across an external system without demonstrating the delivery/reconciliation contract.

For competing updates, choose the accepted version/conditional-write mechanism. An `ETag` with `If-Match` is one HTTP option. [Conditional PATCH requests](https://www.rfc-editor.org/rfc/rfc5789.html#section-2). Verify that the version check and write are atomic and exercise stale input through the endpoint. Preserve wire compatibility through supported client versions; defaults, newly required fields, enum members, ordering, and error changes can all affect consumers.

## Evidence for the convention

Walk a representative create/read/update/delete flow and a collection request through the rules. Select relevant rejection and failure cases: malformed input, unauthorized object/field, tied pagination order, duplicate delivery, stale update, or failure after commit. Inspect the emitted status, body, headers, and stored effects; a schema validator alone cannot establish them. Include observed gateway/browser behavior where the rule depends on it. Record the checked version/environment and unresolved policy choices. Defining conventions does not authorize endpoint rewrites or breaking migrations.
