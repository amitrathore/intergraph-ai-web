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
