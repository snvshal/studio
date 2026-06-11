<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Rules

- Always use shadcn components if they are available.
- Reference the documentation at https://ui.shadcn.com/docs/components.md for shadcn UI components.
- Use `bunx --bun shadcn@latest add <component>` to install any required shadcn components.
- Always run `bun run lint` (or `npm run lint`) to check the project and fix linting/compilation issues at the end of every major file change or edit.
