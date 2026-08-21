# Initial Requirements

These requirements describe the intended training product. Switching details remain provisional until reviewed against an approved, site-specific reference scenario.

## Functional requirements

| ID | Requirement | Initial priority |
| --- | --- | --- |
| FR-001 | The simulator shall run in a modern desktop web browser. | Must |
| FR-002 | The simulator shall model one explicitly fictional UPS topology for the first release. | Must |
| FR-003 | The simulator shall show the energized power path and relevant equipment states. | Must |
| FR-004 | The simulator shall let the learner inspect prerequisites before selecting an action. | Must |
| FR-005 | The simulator shall allow only actions defined for the current scenario and state. | Must |
| FR-006 | The simulator shall provide immediate explanatory feedback after an incorrect or unsafe action. | Must |
| FR-007 | The simulator shall support transfer to maintenance bypass and return to normal operation within the reviewed scenario. | Must |
| FR-008 | The simulator shall provide reset, restart, and completion-summary functions. | Must |
| FR-009 | The simulator shall record scenario events locally for the current attempt. | Should |
| FR-010 | The simulator should provide guided practice and assessment modes. | Should |

## Safety and content requirements

| ID | Requirement | Initial priority |
| --- | --- | --- |
| SR-001 | The application shall display a persistent “Simulation only — not an operating procedure” notice. | Must |
| SR-002 | The learner shall acknowledge the training boundary before beginning a scenario. | Must |
| SR-003 | The application shall identify its topology and sequence as fictional or scenario-specific. | Must |
| SR-004 | Unvalidated switching steps shall not be labeled as approved or field-ready. | Must |
| SR-005 | A qualified subject-matter expert and the training owner shall review scenario logic before training release. | Must |
| SR-006 | Feedback shall explain the simulated consequence without directing action on real equipment. | Must |

## Usability requirements

| ID | Requirement | Initial priority |
| --- | --- | --- |
| UR-001 | Controls and state indicators shall have visible text labels and not rely on color alone. | Must |
| UR-002 | The primary scenario shall be usable with keyboard navigation. | Must |
| UR-003 | Status, warnings, and feedback shall be readable at common laptop resolutions. | Must |
| UR-004 | The interface should use consistent terminology defined in project documentation. | Should |

## Technical requirements

| ID | Requirement | Initial priority |
| --- | --- | --- |
| TR-001 | The first playable version shall not require a backend service. | Must |
| TR-002 | Scenario and state-transition logic shall be separated from visual presentation where practical. | Must |
| TR-003 | State transitions shall be deterministic and testable. | Must |
| TR-004 | The repository shall contain instructions for local use and verification. | Must |
| TR-005 | The deployed build shall contain no connection or control path to real UPS equipment. | Must |

## Acceptance gate for the first training release

The release candidate must pass documented scenario tests, accessibility checks appropriate to its scope, and a content review by the training owner and qualified UPS subject-matter expert. Any open safety-critical defect blocks release.

