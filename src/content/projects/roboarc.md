---
title: RoboARC
subtitle: "Can Robots Think with Their Grippers? Benchmarking Physical Puzzles under Spatial Constraints"
role: Co-lead
status: Ongoing · Public preview · Paper in preparation
stage: acting
order: 1
cover: /images/projects/roboarc.mp4
poster: /images/projects/roboarc.jpg
coverAlt: Two simulated robot arms disentangling two interlocked claws in RoboARC
gallery:
  title: The 14 puzzle families
  note: One reference solution per family, replayed in a fresh simulator and sped up. All 98 tasks are on the demo site.
  items:
    - { src: /images/projects/roboarc/interlocked-claws-03-i01.mp4, poster: /images/projects/roboarc/interlocked-claws-03-i01.jpg, caption: Interlocked claws }
    - { src: /images/projects/roboarc/cast-keyhole-03-i01.mp4, poster: /images/projects/roboarc/cast-keyhole-03-i01.jpg, caption: Cast keyhole }
    - { src: /images/projects/roboarc/cast-coil-03-i01.mp4, poster: /images/projects/roboarc/cast-coil-03-i01.jpg, caption: Cast coil }
    - { src: /images/projects/roboarc/hedgehog-in-cage-03-i01.mp4, poster: /images/projects/roboarc/hedgehog-in-cage-03-i01.jpg, caption: Hedgehog in a cage }
    - { src: /images/projects/roboarc/horseshoe-ring-03-i01.mp4, poster: /images/projects/roboarc/horseshoe-ring-03-i01.jpg, caption: Horseshoe ring }
    - { src: /images/projects/roboarc/slotted-post-ring-03-i01.mp4, poster: /images/projects/roboarc/slotted-post-ring-03-i01.jpg, caption: Slotted post ring }
    - { src: /images/projects/roboarc/orbits-01-i01.mp4, poster: /images/projects/roboarc/orbits-01-i01.jpg, caption: Orbits }
    - { src: /images/projects/roboarc/lock-picking-03-i01.mp4, poster: /images/projects/roboarc/lock-picking-03-i01.jpg, caption: Lock picking }
    - { src: /images/projects/roboarc/buzz-wire-3d-03-i01.mp4, poster: /images/projects/roboarc/buzz-wire-3d-03-i01.jpg, caption: 3D buzz wire }
    - { src: /images/projects/roboarc/rope-threading-01-i01.mp4, poster: /images/projects/roboarc/rope-threading-01-i01.jpg, caption: Rope threading }
    - { src: /images/projects/roboarc/knot-untying-03-i01.mp4, poster: /images/projects/roboarc/knot-untying-03-i01.jpg, caption: Knot untying }
    - { src: /images/projects/roboarc/fiber-bundling-03-i01.mp4, poster: /images/projects/roboarc/fiber-bundling-03-i01.jpg, caption: Fiber bundling }
    - { src: /images/projects/roboarc/blanket-flatten-04-i01.mp4, poster: /images/projects/roboarc/blanket-flatten-04-i01.jpg, caption: Blanket flattening }
    - { src: /images/projects/roboarc/blanket-fold-03-i01.mp4, poster: /images/projects/roboarc/blanket-fold-03-i01.jpg, caption: Blanket folding }
question: Can a coding agent write a robot policy whose motion actually solves a physical puzzle, when pieces are hooked, threaded, knotted, or caged and only the right sequence of moves works?
contribution:
  - Co-lead the project, from the research question to the benchmark design.
  - Defined the manipulation capabilities and a task taxonomy spanning contact, threading, interlocking, and deformable objects; designed most of the tasks.
  - Developed most of the simulation infrastructure, building on the simulator and code of TopoGym, an earlier topology-sensitive VLA prototype.
  - Built controlled environments and reproducible evaluation protocols that measure constraint satisfaction and support trajectory-level failure diagnosis.
findings: []
links:
  project: https://roboarc.embodied-first-exam.ai
hasPage: true
---

## Motivation

Language models can often *describe* how to separate two interlocked claws or thread a rope through a ring. Turning that description into robot motion that works is a different problem. Pulling only jams the pieces. They come apart only when turned in the right order, and the constraint has to hold at every step, not just at the goal. RoboARC asks where the gap between language reasoning, program generation, and physical feasibility actually opens up.

## The benchmark

RoboARC is a benchmark of **98 physical puzzles in 14 families**: interlocked claws, cast-metal brainteasers, a caged hedgehog, a lock, a buzz wire, fibers, knots, threaded rope, chains, and cloth to flatten or fold. Tasks range from very easy to hard.

- **Frozen simulation instances.** Every task starts from the same state. Rigid, rope, and chain puzzles run on MuJoCo; cloth runs on a deterministic GPU cloth solver.
- **Coding agents drive the robot.** An agent gets three hours and controls a simulated robot, either two ALOHA arms or one Franka Panda arm, by writing code.
- **Replay-verified grading.** An attempt counts only if its recorded motion solves the puzzle again when replayed open-loop in a fresh simulator.

## Two evaluation modes

Every task is posed twice, for **196 tasks** in total.

- **Privileged:** the agent codes with the simulator open. It can read object poses and scene state, and reset and replay without limit within the time budget.
- **Standard:** the robot is a remote service. The agent sees only camera images (overhead and two wrist views) and the robot's own state, gets a single episode, and has no resets, as on real hardware.

## Origins: TopoGym

RoboARC grew out of **TopoGym**, an internal prototype for evaluating vision-language-action models on topology-sensitive manipulation. RoboARC reuses its simulator and code base and shifts the focus to agent-generated control policies.

## Status

A public preview with reference solutions for every puzzle family is on the [RoboARC site](https://roboarc.embodied-first-exam.ai). The paper, code, and first evaluation of coding agents (with VLA policies ranked separately) will be released together.
