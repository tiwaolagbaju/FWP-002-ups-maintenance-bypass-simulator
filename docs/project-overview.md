# Project Overview

## Project identity

- **Portfolio series:** Fun Weekend Projects
- **Project:** FWP-002
- **Working title:** UPS Maintenance Bypass Training Simulator
- **Delivery format:** Browser-based interactive simulation
- **Primary audience:** Junior UPS technicians in a supervised training program
- **Primary stakeholder:** Director of Training

## Problem statement

Maintenance-bypass transfers require technicians to interpret system status, confirm prerequisites, follow an approved sequence, and recognize conditions that should stop the task. Classroom discussion alone provides limited opportunity to practice those decisions. This project will provide a safe, repeatable simulation in which learners can make choices and receive immediate feedback.

## Proposed solution

Build a small browser application centered on a simplified, fictional UPS one-line diagram. A scenario engine will control equipment state, permitted actions, alarms, feedback, and scoring. The first scenario will cover a supervised transfer from normal inverter operation to maintenance bypass and a return to normal operation.

## Scope for the first playable version

The first version will include:

- one fictional UPS topology;
- normal inverter, static bypass, maintenance bypass, isolated, and fault-related states as validated during design;
- visual equipment and power-path status;
- prerequisites and action controls;
- immediate coaching for correct and incorrect choices;
- scenario reset and completion summary; and
- an always-visible training and safety boundary.

## Out of scope for the first version

- control of or connection to real equipment;
- a universal switching procedure;
- manufacturer-specific certification;
- high-fidelity electrical calculations or protection studies;
- multi-user accounts, cloud storage, or learning-management-system integration; and
- unsupervised qualification of technicians.

## Measures of success

The first release is successful when:

- a trainee can complete the reviewed scenario in a standard web browser;
- unsafe or out-of-sequence actions are blocked or explained consistently;
- the system never implies that simulated completion authorizes field work;
- reviewers can trace behavior to written requirements and scenarios; and
- the project can be demonstrated from its repository with simple setup instructions.

## Documentation approach

Documentation will evolve alongside implementation. Each meaningful design choice will be recorded in the decision log, and requirements, diagrams, scenarios, testing evidence, screenshots, troubleshooting notes, and lessons learned will be added as their corresponding work begins.

