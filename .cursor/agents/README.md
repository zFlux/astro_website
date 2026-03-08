# Custom Subagents

Cursor discovers subagents in this directory. Each `.md` file is one agent with YAML frontmatter (`name`, `description`, optional `model`, etc.) and a prompt body.

## Agents in this project

| File | Name | Purpose |
|------|------|--------|
| `planning.md` | planning | Goals, scope, timeline |
| `requirements-gathering.md` | requirements-gathering | Stakeholder agreement and documentation |
| `design.md` | design | Architecture and buildable specs |
| `development.md` | development | Implementation and code review |
| `testing.md` | testing | Bug finding/fixing and quality bar |
| `deployment.md` | deployment | Production release and stability |
| `maintenance.md` | maintenance | Incidents, fixes, performance |

See [../AGENTS.md](../AGENTS.md) for usage and "done" criteria.

## Invoking

- **By name**: `/planning`, `/design`, `/testing`, etc.
- **In natural language**: "Use the planning agent to…", "Run the design subagent on…"

## Adding or editing agents

1. Add or edit a `.md` file in `.cursor/agents/`.
2. Use YAML frontmatter: `name`, `description`, and optionally `model`, `readonly`, `background`.
3. Write the prompt in the body; the main agent uses `description` to decide when to delegate.

Reference: [Cursor Subagents docs](https://cursor.com/docs/agent/subagents).
