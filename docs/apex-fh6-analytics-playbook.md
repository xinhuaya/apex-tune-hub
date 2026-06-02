# Apex Tune Hub FH6 Analytics Playbook

This playbook explains how to read the first real traffic signals for Apex Tune Hub and what to change next. Use it with Google Search Console, Vercel Analytics, Speed Insights, and the browser `localStorage` event trail.

## Current Product Funnel

1. Search visitor lands on a page.
2. The page routes the player into one FH6 tool path:
   - homepage `Start here` cards
   - homepage `Tune workbench`
   - full Tune Calculator
   - Drift Tune Calculator
   - Gear Ratio Calculator
3. The player changes a symptom, opens a matched guide, copies setup notes, saves a preset, or copies a preset link.
4. The best pages are expanded with screenshots, tables, FAQ, source notes, and stronger internal links.

The product is not "articles first." The product is the FH6 tuning workflow: choose a car problem, generate a baseline, test it, save or share the preset, and return when the next car or weekly event appears.

## Analytics Sources

| Source | What to read | Best use |
| --- | --- | --- |
| Google Search Console | Queries, pages, impressions, clicks, CTR, average position, indexing | Find which pages and keywords Google already believes in. |
| Vercel Analytics | Page views and custom `FH6 Tool Action` events | Find whether visitors actually use the tool after landing. |
| Vercel Speed Insights | INP, LCP, CLS, slow routes | Fix pages that feel slow before adding more content. |
| Browser localStorage | Last 50 local FH6 tool events on the current device | Quick manual QA after clicking through the site. |

## Custom Event Dictionary

All custom product events use the event name:

```text
FH6 Tool Action
```

The `action` property tells you what happened.

| Action | Source | Meaning | Next decision |
| --- | --- | --- | --- |
| `open_home_start_path` | homepage `Start here` cards | User chose a problem-led homepage path. | Promote the highest-clicked path in hero copy and internal links. |
| `select_home_symptom_preset` | homepage workbench | User clicked a one-click symptom preset. | Add more presets if one symptom dominates. |
| `change_home_workbench_input` | homepage workbench | User changed race, drive, class, problem, or style on the homepage. | Move the most-used input higher or make it a preset. |
| `open_home_full_calculator` | homepage workbench | User left the homepage for the full Tune Calculator. | This is the main homepage conversion. |
| `open_home_gear_ratio_tool` | homepage workbench | User jumped to the Gear Ratio Calculator. | Build more launch, limiter, and gearing content if this rises. |
| `open_home_matched_guide` | homepage workbench | User opened the guide matched to the selected issue. | Improve that guide with images, examples, and calculator handoff. |
| `open_home_preset_links` | homepage workbench | User opened the preset library from the homepage. | Add more preset pages for the selected issue/class. |
| `select_symptom_preset` | full calculators | User clicked a quick preset inside a calculator. | Keep preset language close to search query wording. |
| `change_tool_input` | full calculators | User changed a calculator dropdown. | Learn which fields matter most after search. |
| `copy_setup_notes` | full calculators | User copied generated setup notes. | Strong success signal; expand similar tool flows. |
| `save_preset` | full calculators | User saved a preset on the device. | Strong return-use signal; later candidate for member accounts. |
| `copy_preset_link` | full calculators | User copied the shareable preset URL. | Good sign for social/share-code style content. |
| `delete_saved_preset` | full calculators | User removed a saved local preset. | Watch only if save/delete churn is high. |
| `open_matched_guide` | calculator side panels | User opened a related issue guide. | Add stronger calculator blocks inside that guide. |
| `open_result_guide` | result action plan | User opened a guide after seeing generated output. | Improve the result guide first. |
| `open_preset_library` | gear/action plan | User went from a result to preset comparison. | Add preset rows for this symptom. |
| `open_best_drift_cars` | drift calculator | User went from drift tuning to car choice. | Expand drift car pages and drift route examples. |

## Manual QA With localStorage

After clicking around the live site, open the browser console on `https://apextunehub.com` and run:

```js
JSON.parse(localStorage.getItem('apex-tune-hub:fh6-tool-events') || '[]')
```

Use this only for manual checks. It is local to the browser and does not replace Vercel Analytics.

## Weekly Review Routine

Run this once per week, ideally on the same weekday.

1. Open Google Search Console > Performance > Queries.
2. Export top queries for the last 7 days and last 28 days.
3. Mark each query as one of:
   - calculator intent
   - car choice intent
   - handling fix intent
   - settings intent
   - platform/status intent
4. Open Performance > Pages and sort by clicks.
5. Compare top clicked pages against Vercel custom events.
6. Choose the next batch from the decision rules below.

## Decision Rules

| Signal | What it means | Action |
| --- | --- | --- |
| High impressions, low CTR | Google is testing the page, but the title/snippet is weak. | Rewrite title, meta description, H1, and first screen copy. |
| High clicks, low tool events | Search traffic lands, but the product path is not obvious. | Move calculator CTA higher and add a problem-led block near the top. |
| Many `open_home_start_path`, few `open_home_full_calculator` | Homepage cards work, but the workbench or full calculator handoff is weak. | Tighten homepage copy and make the matching card lead into the full tool. |
| Many `change_home_workbench_input` for one field | Users are exploring that variable. | Turn common combinations into one-click presets. |
| Many `change_tool_input`, few copy/save actions | Users experiment but do not trust the output yet. | Add clearer result explanation, test route steps, and screenshots. |
| Many `copy_setup_notes` or `save_preset` | The calculator workflow is useful. | Add more internal links to this tool from high-traffic pages. |
| Many guide clicks, few calculator events | Content is attracting readers but not sending them to the tool. | Add calculator blocks inside the guide after the first useful section. |
| GSC page indexed but no impressions after 14 days | Page may be too thin or not internally linked enough. | Add table, FAQ, image/video source note, and 3-5 internal links. |
| Page not indexed | Google has not accepted the page yet. | Improve uniqueness, reduce boilerplate, add internal links, resubmit URL. |

## First Pages To Watch

Track these pages before spreading effort across the whole site:

```text
/
/tools/forza-horizon-6-tune-calculator
/tools/forza-horizon-6-gear-ratio-calculator
/tools/forza-horizon-6-drift-tune-calculator
/games/forza-horizon-6/guides/fix-oversteer
/games/forza-horizon-6/guides/fix-understeer
/games/forza-horizon-6/guides/fix-wheelspin
/games/forza-horizon-6/best-cars
/games/forza-horizon-6/guides
/games/forza-horizon-6/cars
```

## Content Upgrade Template

When a page gets impressions or clicks, upgrade it in this order:

1. Add a top answer box that solves the query in 3-5 lines.
2. Add a table with settings, symptoms, test route, and next action.
3. Add one image or video embed with a source note.
4. Add a calculator handoff block with the exact preset query string.
5. Add FAQ using the exact language from GSC queries.
6. Add 3-5 internal links:
   - one calculator
   - one matching guide
   - one car/database page
   - one preset page if relevant
   - one official source page when status/platform facts are involved

## 30-Day Operating Target

By the end of the next 30 days, the site should have:

- 20+ indexed high-intent FH6 pages.
- 5+ pages with search clicks.
- 3+ pages that produce `FH6 Tool Action` events.
- At least one tool action beyond pageview: copy notes, save preset, copy preset link, or open a matched guide.
- A short list of pages worth adding images/video-derived walkthroughs to.

Do not judge the site only by pageviews. The useful metric is: search clicks that become tuning actions.
