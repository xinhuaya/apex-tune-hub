# Apex Tune Hub FH6 Content Production Playbook

This playbook defines how to turn search demand, videos, screenshots, and calculator presets into useful FH6 pages without creating thin AI content or mismatched visuals.

## Core Rule

Every page must help the player do one thing:

```text
choose a problem -> pick a baseline -> test the car -> save or refine the setup
```

If a page does not route into a calculator, guide, car page, preset, official source, or weekly tracker, it is probably too weak to publish.

## Safe Source Types

Use sources in this order:

1. Official Forza / Xbox / Steam / PlayStation pages for release, platform, edition, and feature claims.
2. Apex Tune Hub calculators and existing internal data for setup logic.
3. User-provided gameplay screenshots or clips.
4. Embedded YouTube videos with clear source attribution.
5. Publicly available creator videos as research input, summarized in original wording.

Do not copy article text, video transcripts, thumbnails, creator overlays, or long verbatim quotes. Use short source notes and original explanations.

## Video-to-Guide Workflow

When using a YouTube guide or gameplay video, follow this sequence:

1. Record source metadata:
   - creator/channel
   - video title
   - URL
   - publish date
   - watched date
   - relevant timestamp ranges
2. Extract only the gameplay facts needed for the page:
   - car
   - class
   - route/event
   - drivetrain
   - visible setup behavior
   - symptom being fixed
   - result or test outcome
3. Convert the observation into an Apex Tune Hub workflow:
   - matching calculator preset URL
   - settings group to test first
   - guide link
   - car page link
   - stop condition
4. Add media:
   - prefer an embedded YouTube player when the video itself is the source
   - use user-owned screenshots when available
   - use generated diagrams for concepts such as understeer, gearing, brake bias, or test route flow
5. Add a source note:
   - "Source: embedded video by [creator], watched for route and symptom context."
   - Do not imply the creator endorsed Apex Tune Hub.

## Article Structure

Use this structure for most high-intent guide pages:

```text
H1: Exact player problem
Top answer: 3-5 lines
Quick preset block: calculator URL with prefilled query params
Symptoms table: what the player feels, likely cause, first setting group
Step-by-step test: repeatable route or event test
Media block: embedded video, user screenshot, or generated diagram
Settings notes: what to change first and what not to touch yet
FAQ: based on GSC queries
Internal links: calculator, guide, car page, preset, official source
Source notes: official pages and video/source attribution
```

## Image and Video Rules

| Media type | Use it when | Required note |
| --- | --- | --- |
| User screenshot | The screenshot comes from our own gameplay or user-provided media. | "Screenshot captured from Apex Tune Hub testing" or the user-provided source note. |
| Generated diagram | The page explains a concept, not a specific car screenshot. | No creator attribution needed, but keep it clearly illustrative. |
| Embedded YouTube video | The video is useful as the source or example. | Credit channel, title, URL, and watched date. |
| Official image | Only if official usage terms allow it or it is embedded from an official source. | Credit official source and avoid using it as brand identity. |

Never use Forza logos, official key art, creator thumbnails, or copied video frames as Apex Tune Hub brand assets.

## Calculator Preset URL Pattern

Use prefilled calculator URLs so the article connects directly to the product.

Tune Calculator:

```text
/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=understeer&style=balanced
```

Drift Calculator:

```text
/tools/forza-horizon-6-drift-tune-calculator?drive=RWD&power=medium&tires=drift&issue=no-angle&skill=beginner
```

Gear Ratio Calculator:

```text
/tools/forza-horizon-6-gear-ratio-calculator?race=road&gears=6&priority=balanced&issue=bogs-after-shift
```

## Page Upgrade Checklist

Before publishing or upgrading a page, check:

- [ ] Does the H1 match a real query or player problem?
- [ ] Does the first screen answer the problem quickly?
- [ ] Is there a calculator handoff above the fold or immediately after the first useful section?
- [ ] Is there at least one table?
- [ ] Is there a FAQ section using natural player wording?
- [ ] Is every media item tied to the exact article content?
- [ ] Are source notes visible and honest?
- [ ] Are untested recommendations labelled as baseline or launch-prep logic?
- [ ] Does the page link to at least one tool and one related guide?
- [ ] Does the page avoid copying creator wording or visual assets?

## Priority Content Queue

Use GSC data first. If there is no data yet, prioritize pages that route into the core tools.

Run the local media coverage audit before choosing screenshots or videos:

```text
pnpm audit:fh6-media
```

The report lists how many FH6 pages already have original diagrams, credited media sources, and embedded videos. Use `highPriorityMissingMedia` as the first queue for pages that need screenshots, video embeds, or stronger source notes.

1. Calculator improvement pages:
   - FH6 tune calculator
   - FH6 gear ratio calculator
   - FH6 drift tune calculator
2. Handling fix pages:
   - understeer
   - oversteer
   - wheelspin
   - slow launch
   - unstable braking
   - poor top speed
3. Car choice pages:
   - best S1 road cars
   - best drift cars
   - best JDM cars
   - best rally cars
4. Settings pages:
   - controller deadzone
   - wheel rotation
   - PC graphics
   - Steam Deck
5. Weekly/event pages:
   - weekly playlist
   - seasonal championship tuning
   - Trial co-op tuning

## When To Ask For Human Input

Stop and ask the site owner only when one of these is needed:

- account login
- captcha
- payment
- DNS
- platform authorization
- API secret
- copyrighted media approval
- user-owned gameplay screenshot/video upload

Everything else can be drafted, tested, committed, and pushed without waiting.
