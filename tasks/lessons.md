# Lessons Learned

## Game-specific policy is not platform behavior (2026-11-22)

**Context**: The site redesign presented The Js coseller settings as how Intergraph
attributes value and pays people: an 80% pool, an equal split over 30 days, a 5%
recruiter override and a payout hold. The user corrected this. That logic is only an
example. Attribution and payouts are rules that each game's Game Master defines; MoM
records what happened, holds the money in the ledger and settles whatever the GM decides.

### Rules

1. **Separate platform capabilities from one game's configuration.** Before writing copy
   from a game's code or defaults, ask whether it is MoM, gm-lib, or a single game's
   policy. Only platform capabilities belong in product claims.
2. **Label examples as examples.** When a concrete game (The Js) illustrates a mechanism,
   say so explicitly ("One example · The Js") and add that other games can do it
   differently.
3. **Describe gm-lib protocols as ready-made options, not the model.** Coseller, Market
   and others are reusable protocols that a game can use, tune or replace with its own.
4. **Percentages, windows and holds are settings.** Present them as a game's policy, never
   as Intergraph-wide numbers.

## A case study describes the whole product, not one protocol (2026-11-22)

**Context**: The first Highway One case study was almost entirely about the Mandate
protocol, because Mandate was the newest and most distinctive piece. The user corrected
this: Highway One is a collector-vehicle marketplace, and Mandate is one feature of it.

### Rules

1. **Lead with what the product is and does for its users.** Then show how the Intergraph
   game layer fits in. A protocol is never the headline of a case study.
2. **Cover the product's range.** List the live features, the pilots and the features
   that are built but switched off, each with its own status badge.
3. **Verify feature claims against the release docs.** Check which feature flags are on
   and what is gated (payment, settlement, review) before describing how a feature works.

## Plans cover only the immediate step (2026-11-22)

**Context**: When planning a small follow-up (attaching a repo), the plan file still carried
every earlier, completed plan below the new one. The user rejected it: only the immediate
plan should be shown.

### Rules

1. **Rewrite the plan file for each new task.** Don't prepend new plans to old ones. Past
   plans are history and live in git and the conversation, not the plan.
2. **Size the plan to the task.** A one-step task gets a few lines.
