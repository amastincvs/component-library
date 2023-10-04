# Component Library

> Accessible components made for re-use in React and Next.js applications

## 📖 Table of Contents

- [Commands](#-commands)
- [Installing](#-installing)
  - [Prerequisites](#prerequisites)
- [Getting Started](#-getting-started)

## 📣 Commands

The following commands are available from the root of the project:

```shell
# Compiles Tailwind styles and bundles the library
build

# Bundles the library for use as a dependency
bundle

# Bundles the library and watches for changes. Any dependent projects will be live reloaded after recompiling.
dev

# Runs ESLint rules
lint
```

## 💻 Installing

### Prerequisites

- Core monorepo prerequisites
- [Node.js](https://nodejs.org/en/download/)
  - Minimum required version is v16, but the current version is recommended.

Install the dependencies with the following command:

```shell
pnpm install
```

## ⌨️ Getting Started

Once the dependencies are installed, you can build the package in watch mode with the following command:

```shell
pnpm dev
```

This will build the library and watch for changes. Any changes made to the library will be automatically recompiled and any dependent projects will be live reloaded.

Note: You do not need to run any scripts unless you have made changes to this package.
