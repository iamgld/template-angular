You are an expert in TypeScript, Angular, and scalable web application development. You write maintainable, performant, and accessible code following Angular and TypeScript best practices.

## Project Overview

This is an **Angular 21** template project with the following characteristics:

- **Zoneless**: Uses `provideZonelessChangeDetection()` - no Zone.js
- **SSR/SSG**: Server-side rendering with `@angular/ssr` and Express
- **Package Manager**: pnpm (v10.23.0)
- **Test Framework**: Vitest with Angular testing utilities
- **Linting**: Biome for TypeScript, Stylelint for SCSS
- **Component Prefix**: `gld`
- **Git Hooks**: Husky with Commitlint (conventional commits)

## TypeScript Best Practices

- Use strict type checking (all strict options are enabled)
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain
- Use `type` imports for type-only imports: `import type { Routes } from '@angular/router'`
- Omit semicolons at end of statements (Biome configuration)
- Use single quotes for strings

## Path Aliases

Use the configured path aliases for imports:

- `@app` → `src/app/index.ts`
- `@environment` → `src/environments/environment.local.ts`
- `@shared/*` → `src/app/shared/*`

Example:
```typescript
import { Environment } from '@shared/models'
```

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular 21.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images
  - `NgOptimizedImage` does not work for inline base64 images
- This project is **zoneless** - always use `OnPush` change detection

## Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator (required for zoneless)
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- Use `signal()` for component state (see App component example)
- Component files use `.ts` extension without `component` suffix (e.g., `app.ts`, not `app.component.ts`)
- Use `templateUrl` and `styleUrl` for external templates/styles

Example component structure:
```typescript
import { Component, signal } from '@angular/core'

@Component({
  selector: 'gld-example',
  imports: [],
  templateUrl: './example.html',
  styleUrl: './example.scss',
})
export class Example {
  protected readonly title = signal('Example')
}
```

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead
- Use `@ngrx/signals` for complex state management (already installed)

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection

## Project Structure

Place shared code in the appropriate `src/app/shared/` subdirectory:

- `components/` - Reusable UI components
- `directives/` - Custom directives
- `guards/` - Route guards
- `interceptors/` - HTTP interceptors
- `models/` - Interfaces, types, and enums
- `modules/` - Feature modules (if needed)
- `pipes/` - Custom pipes
- `resolvers/` - Route resolvers
- `services/` - Shared services
- `store/` - State management (NgRx Signals)
- `validators/` - Custom validators

Export shared items through barrel files (`index.ts`).

## Styling (SCSS)

This project uses ITCSS (Inverted Triangle CSS) architecture with layers:

1. **Settings** (`_setting.scss`) - CSS variables, breakpoints, colors, spacing
2. **Tools** (`_tools.scss`) - Mixins and functions
3. **Base** (`_base.scss`) - Reset and normalize styles
4. **Objects** (`_objects.scss`) - Layout patterns
5. **Trumps** (`_trumps.scss`) - Utility classes

Use CSS custom properties defined in `:root`:
- Breakpoints: `--break-point--mobile`, `--break-point--tablet`, `--break-point--desktop`
- Font sizes: `--font-size--heading-one`, `--font-size--normal`, `--font-size--small`
- Spacing: `--spacing--xxs`, `--spacing--s`, `--spacing--m`, `--spacing--l`
- Radius: `--radius--xs`, `--radius--s`, `--radius--m`
- Z-index: `--zindex--one`, `--zindex--two`

## Environment Configuration

Environment files are in `src/environments/`:
- `environment.local.ts` - Local development
- `environment.development.ts` - Development server
- `environment.staging.ts` - Staging server
- `environment.production.ts` - Production

Import environment using: `import { environment } from '@environment'`

Environment interface:
```typescript
interface Environment {
  environmentType: EnvironmentType
  production: boolean
}
```

## Testing

- Test framework: **Vitest** (not Jest)
- Test files use `.spec.ts` suffix
- Use `TestBed.configureTestingModule()` for component tests
- Use `fixture.whenStable()` for async operations in zoneless mode

Example test:
```typescript
import { TestBed } from '@angular/core/testing'
import { Example } from './example'

describe('Example', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example],
    }).compileComponents()
  })

  it('should create', () => {
    const fixture = TestBed.createComponent(Example)
    expect(fixture.componentInstance).toBeTruthy()
  })
})
```

## SSR Configuration

- Server entry: `src/server.ts` (Express server)
- Server routes: `src/app/app.routes.server.ts`
- Default render mode: `RenderMode.Prerender`
- Server config merges with client config in `app.config.server.ts`

## Commands

- `pnpm start` - Start local dev server
- `pnpm test` - Run tests with Vitest
- `pnpm build` - Production build
- `pnpm linters` - Run Stylelint and Biome
- `pnpm biome:check` - Check formatting and linting
- `pnpm server:ssr` - Run SSR server (after build)

## Code Style (Biome)

- Indentation: 2 spaces
- Line width: 100 characters
- No semicolons
- Single quotes
- Trailing commas: all
- Arrow function parentheses: always
