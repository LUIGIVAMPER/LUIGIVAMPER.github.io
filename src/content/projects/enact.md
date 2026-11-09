---
title: ENACT
subtitle: Evaluating Embodied Cognition with World Modeling of Egocentric Interaction
role: Co-author
status: ICLR 2026 · NeurIPS 2025 LAW Workshop Spotlight
stage: understanding
order: 3
# cover: /images/projects/enact.png
coverAlt: Egocentric interaction sequence with scene-graph state changes from ENACT
question: Do vision-language models understand how egocentric interactions change the state of the world, and how exactly do they fail when they don't?
contribution:
  - Helped drive the benchmark design; ran ablation experiments and data collection.
  - Built a component-level error-analysis framework that parses scene-graph and state-change differences into structured error signatures.
  - Ran statistical, qualitative, and handedness-asymmetry analyses across multiple VLMs and human baselines.
findings:
  - Current VLMs show substantially higher error rates than humans on embodied reasoning tasks.
  - Omission and hallucination account for over 40% of structural errors.
  - Models struggle to track which hand (left or right) is used during egocentric interaction.
links: {}
hasPage: false
---
