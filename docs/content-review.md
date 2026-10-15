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
| "6+ years" | Base §5 | Development starts August 2020; earlier support work excluded. |
| "4 industries" | LinkedIn About | Procurement, logistics, financial services, healthcare. |
| "2 AI assistants" | INL-01, STR-01–03 | Logistics and procurement assistants integrated into products. |
| "6–8 developers supported" | UNI-02 | Technical support, not direct reports. |
| Case 01 — bid comparison | STR-04, STR-05 | Personal BFF ownership; award API authorship explicitly not claimed. |
| Case 02 — AI assistants | INL-01, INL-02, STR-02, STR-03 | Shared extraction/indexing on the procurement side is disclosed. |
| Case 03 — financial platform | UNI-01, UNI-02 | 95% is a CI requirement for the tested scope, not a personal result. |
| Multi-product shell (experience entry) | STR-01 | Described as a capability only; no topology, transport, or infrastructure details. |
| ~15% customer growth (Inlog entry) | Resume, LinkedIn, base §14.1 | Presented, as on LinkedIn, as a shared engineering/product/commercial outcome. |
| Principles | STR-04, INL-01, UNI-01, EP-05, UNI-02 | Each tied to a described piece of work. |
| Field notes | EP-01, EP-04, EP-06, EP-03 | Employer intentionally unnamed (the base does not specify it). |
| Recommendation quote | LinkedIn (public) | Original Portuguese on `/pt`; English translation labelled as such. |
| Languages | Resume, base §3.3 | English shown as intermediate, as self-declared on the resume. |

## Conservative decisions

- No client names, endpoints, schemas, infrastructure topology, source code, or screenshots. Diagrams are original conceptual illustrations, labelled as such.
- No invented repositories, demos, metrics, awards, or logos. Qualitative outcomes are stated as qualitative.
- Excluded: salary, contract arrangement, notice period, phone number on the page, personal history, side projects that are only planned (RepoPilot AI), and the unconfirmed historical claims listed in base §17.1.

## Owner review before launch

1. Confirm you're comfortable publishing the Ricardo Oliveira recommendation (and its English translation).
2. Confirm the English level you want shown publicly: the resume says *Intermediate*; LinkedIn says *Professional working proficiency*.
3. The published resume PDF contains your phone number.
4. Optionally set `NEXT_PUBLIC_SITE_URL` once a custom domain exists (see README).

Future content changes belong in `src/content/en.ts` and `src/content/pt.ts`. Keep personal contributions, team outcomes, and unmeasured benefits distinct in both languages.
