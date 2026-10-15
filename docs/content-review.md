# Content provenance and publication notes

Reviewed 14 October 2026. The public site is intentionally narrower than the private source materials.

## Sources

- **Factual base** — `Maique_Moraes_Base_Factual_Entrevistas.md`, v2.0, 13 October 2026. Consolidated, owner-confirmed facts with explicit ownership and evidence limits. Section codes below (STR-, INL-, UNI-, EP-) refer to it.
- **Resume** — `Maique_Moraes_Resume.pdf`, the exact file supplied. Published unchanged as `public/maique-moraes-resume.pdf`.
- **LinkedIn** — profile text supplied by the owner (summary, experience, education, volunteering, recommendation).

Private source files are not committed to this repository.

## Claim mapping

| Site content | Source | Treatment |
| --- | --- | --- |
| Contacts (email, LinkedIn, GitHub), João Pessoa, UTC−3 | Resume, LinkedIn, base §3.1 | Exact supplied values. Phone number is not shown on the page; it is only inside the original resume PDF. |
| Hero facts: current role (Stratesys), previous employers | Resume, LinkedIn, base §5 | Employer names only, as on LinkedIn. |
| Live local time and visitor time difference | Base §3.1 (João Pessoa, UTC−3) | Computed in the browser; nothing about the visitor is stored or sent. |
| "View source" link | Public GitHub repository | Points to this site's own public repository. |
| Note on private repositories | Owner statement, 15 October 2026 | Most production work is in private company repositories; stated once, in the contact section. |
| "6+ years" | Base §5 | Development starts August 2020; earlier support work excluded. |
| "6 industries" | LinkedIn About; base §5; owner statement, 15 October 2026 | Procurement, logistics, financial services, healthcare, public sector (official documents, Autonomo), vehicle telemetry (Creare). |
| "2 AI assistants" | INL-01, STR-01–03 | Logistics and procurement assistants integrated into products. |
| "15+ people mentored or trained" | UNI-02; owner statement, 15 October 2026 | 6–8 developers mentored at Unicred plus about ten non-developer colleagues trained at Creare. Not direct reports. |
| Case 01 — bid comparison | STR-04, STR-05 | Personal BFF ownership; award API authorship explicitly not claimed. |
| Case 02 — AI assistants | INL-01, INL-02, STR-02, STR-03 | Shared extraction/indexing on the procurement side is disclosed. |
| Case 03 — financial platform | UNI-01, UNI-02 | 95% is a CI requirement for the tested scope, not a personal result. |
| Who used each product (experience entries) | Owner statement, 15 October 2026 | Described by type only — large companies, public services in several states, a nationwide financial cooperative, one of Brazil's largest hospitals, state transit departments, multinational agribusiness companies. No client names (base v2.1 §17.4). |
| Multi-product shell (experience entry) | STR-01 | Described as a capability only; no topology, transport, or infrastructure details. |
| ~15% customer growth (Inlog entry) | Resume, LinkedIn, base §14.1 | Presented, as on LinkedIn, as a shared engineering/product/commercial outcome. |
| Principles | STR-04, INL-01, UNI-01, EP-05, UNI-02 | Each tied to a described piece of work. |
| Field notes | EP-01, EP-04, EP-06, EP-03 | Employer intentionally unnamed (the base does not specify it). |
| Recommendation quote | LinkedIn (public), 2022 | Original Portuguese on `/pt`; English translation on `/`. Source and translation notes removed from the caption at the owner's request (15 October 2026). |
| Languages | Resume, base §3.3; owner confirmation, 15 October 2026 | English shown as intermediate. |

## Conservative decisions

- No client names, endpoints, schemas, infrastructure topology, source code, or screenshots. Diagrams are original conceptual illustrations, labelled as such.
- No invented repositories, demos, metrics, awards, or logos. Qualitative outcomes are stated as qualitative.
- Excluded: salary, contract arrangement, notice period, phone number on the page, personal history, side projects that are only planned (RepoPilot AI), and the unconfirmed historical claims listed in base §17.1.
- No "open to work" messaging (owner decision, 15 October 2026): the site invites conversations without signalling a job search. The original resume PDF keeps its own wording.

## Owner review before launch

1. The Ricardo Oliveira recommendation is published from the public LinkedIn profile; remove it from `background.quote` if preferred.
2. The published resume PDF contains your phone number.
3. Optionally set `NEXT_PUBLIC_SITE_URL` once a custom domain exists (see README).

Future content changes belong in `src/content/en.ts` and `src/content/pt.ts`. Keep personal contributions, team outcomes, and unmeasured benefits distinct in both languages.
