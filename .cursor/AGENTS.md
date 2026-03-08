# Project Subagents — Software Engineering Workflow

This project defines **7 custom subagents** for the full software engineering lifecycle. Use them to get consistent, phase-specific behavior and clear "done" criteria.

## Quick reference

| Phase | Subagent | Invoke with | Done when |
|-------|----------|-------------|-----------|
| **1. Planning** | `planning` | `/planning` or "run the planning agent" | Specific, measurable goals and a realistic timeline |
| **2. Requirements** | `requirements-gathering` | `/requirements-gathering` or "gather requirements" | Stakeholders agree on what to build; it's documented |
| **3. Design** | `design` | `/design` or "do the design" | Architecture and specs the team can build from without constant clarification |
| **4. Development** | `development` | `/development` or "implement" / "code review" | Code is written and reviewed |
| **5. Testing** | `testing` | `/testing` or "test" / "quality check" | Critical bugs found and fixed; release meets quality bar |
| **6. Deployment** | `deployment` | `/deployment` or "deploy" / "release" | Code is running in production and stable |
| **7. Maintenance** | `maintenance` | `/maintenance` or "fix production" / "incident" | Issues resolved; performance acceptable |

## Typical flow

1. **Planning** → goals and timeline  
2. **Requirements gathering** → agreed, documented scope  
3. **Design** → architecture and specs  
4. **Development** → implementation and review  
5. **Testing** → quality bar met  
6. **Deployment** → live and stable  
7. **Maintenance** → ongoing fixes and performance

You can invoke a subagent explicitly (e.g. `/planning create a roadmap for the auth feature`) or describe the task and let the main agent delegate (e.g. "we need to document what we're building for the API" → requirements-gathering).

## File locations

- **Project agents**: `.cursor/agents/` (this repo)
- **Definitions**: one `.md` file per agent (e.g. `planning.md`, `requirements-gathering.md`)

To add or change behavior, edit the corresponding file in `.cursor/agents/`.
