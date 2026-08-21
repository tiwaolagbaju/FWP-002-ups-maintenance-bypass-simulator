# FWP-002 — UPS Maintenance Bypass Training Simulator

A browser-based training simulator that helps junior technicians practice the decision-making involved in transferring a UPS from normal inverter operation to maintenance bypass and returning it to normal operation.

This is **Fun Weekend Project 002 (FWP-002)**. The repository will be documented incrementally so it records both the finished training tool and the reasoning used to build it.

## Project status

**Phase 1 — Foundation**

- [x] Create the starter repository structure
- [x] Define the project purpose and audience
- [x] Add the safety disclaimer
- [x] Record initial requirements
- [ ] Validate the simulated operating sequence with an approved subject-matter expert
- [ ] Design the UPS state machine and one-line diagram
- [ ] Build the first playable scenario
- [ ] Add automated and scenario-based testing
- [ ] Package a reviewed training release

## Training objective

The simulator will teach a trainee to:

- recognize normal inverter, static bypass, and maintenance bypass conditions;
- inspect prerequisites before operating switching devices;
- follow a controlled, scenario-specific sequence;
- understand how interlocks and warnings affect the next permitted action;
- identify unsafe or incorrect actions and learn why they are incorrect; and
- return the simulated UPS to normal operation after maintenance.

## Planned experience

The learner will interact with a simplified UPS one-line diagram, status indicators, alarms, and switching controls. The application will evaluate each action, explain consequences, and record scenario results without controlling real equipment.

## Safety disclaimer

> **Training simulation only — not an operating procedure.** This project is a conceptual educational tool. It must not be used to operate, switch, isolate, energize, or service any real UPS or electrical system. Actual procedures vary by manufacturer, model, topology, site design, configuration, and current equipment condition. Real work must be performed only by qualified and authorized personnel using the approved site-specific method of procedure, current OEM documentation, required PPE, applicable electrical-safety practices, and verified field conditions. When the simulator conflicts with an approved procedure or qualified direction, the approved procedure and qualified direction govern.

See [SAFETY.md](SAFETY.md) for the complete project safety boundary.

## Documentation

- [Project overview](docs/project-overview.md)
- [Initial requirements](docs/requirements.md)
- [Development roadmap](docs/roadmap.md)
- [Decision log](docs/decision-log.md)

Future design, scenario, testing, troubleshooting, and lessons-learned documents will be added as those phases begin.

## Repository structure

```text
FWP-002-ups-maintenance-bypass-simulator/
├── README.md
├── SAFETY.md
├── .gitignore
├── docs/
├── diagrams/
├── screenshots/
├── src/
└── tests/
```

## Running the project

There is no playable build yet. The first implementation milestone will establish a small browser application that can run locally without access to external services.

## Validation and release policy

No version should be presented as an approved training tool until its modeled topology, switching sequence, warnings, failure behavior, terminology, and learning objectives have been reviewed by the appropriate training owner and a qualified UPS subject-matter expert.

## License

No license has been selected yet. Until one is added, normal copyright restrictions apply.

