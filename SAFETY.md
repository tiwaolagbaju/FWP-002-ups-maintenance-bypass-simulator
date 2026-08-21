# Safety Boundary

## Purpose

This repository contains a fictionalized software simulation for education and discussion. It is not an electrical switching procedure, method of procedure (MOP), emergency operating procedure, or substitute for practical qualification.

## Prohibited use

Do not use this project to:

- operate or troubleshoot real UPS equipment;
- determine whether equipment is safe to switch, isolate, energize, or service;
- replace OEM instructions, site procedures, permits, lockout/tagout, or job-hazard analysis;
- train personnel without review and approval by the responsible organization; or
- infer the state of real equipment from a simulated display.

## Why the simulator cannot be universal

UPS topologies, switching devices, interlocks, control labels, alarm behavior, and approved sequences differ across manufacturers, product families, configurations, and sites. Conditions that appear similar may require different actions.

## Required review before training use

Before an internal training release, reviewers must verify:

1. the simulated one-line and equipment terminology;
2. every prerequisite and switching transition;
3. the modeled interlocks, alarms, warnings, and failure consequences;
4. the process for returning to normal operation;
5. alignment with the intended audience and learning objectives; and
6. clear separation between simulation feedback and field authorization.

## In-application safeguards

The playable application should display a persistent “Simulation only” notice, identify the active fictional scenario, avoid presenting steps as universally applicable, and require acknowledgement of the training boundary before a scenario begins.

