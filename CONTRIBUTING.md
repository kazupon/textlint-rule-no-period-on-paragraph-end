# Contributing Guide

- [Contributing Guide](#contributing-guide)
  - [Issue Reporting Guidelines](#issue-reporting-guidelines)
  - [Pull Request Guidelines](#pull-request-guidelines)
    - [Work Step Example](#work-step-example)
  - [Development Setup](#development-setup)
    - [Lint](#lint)
    - [Code Auto fix](#code-auto-fix)
    - [Build](#build)
    - [Tests](#tests)
    - [Other script tasks](#other-script-tasks)

## Issue Reporting Guidelines

- The issue list of this repo is **exclusively** for bug reports and feature requests. Non-conforming issues will be closed immediately.

- Try to search for your issue, it may have already been answered or even fixed in the main branch.

- Check if the issue is reproducible with the latest stable version of gh-changelogen. If you are using a pre-release, please indicate the specific version you are using.

- It is **required** that you clearly describe the steps necessary to reproduce the issue you are running into. Issues with no clear repro steps will not be triaged. If an issue labeled `status: need more repro codes or info` receives no further input from the issue author for more than 5 days, it will be closed.

- For bugs that involves build setups, you can create a reproduction repository with steps in the README.

- If your issue is resolved but still open, don’t hesitate to close it. In case you found a solution by yourself, it could be helpful to explain how you fixed it.

## Pull Request Guidelines

- Checkout a topic branch from the `main` branch.

- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.

- Make sure all script tasks passes. (see [development setup](#development-setup))

- If adding new feature:

  - Add accompanying test case.
  - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

- If fixing a bug:
  - Provide detailed description of the bug in the PR.
  - Add appropriate test coverage if applicable.

### Work Step Example

- Fork the repository from [gh-changelogen](https://github.com/kazupon/textlint-rule-no-period-on-paragraph-end) !
- Create your topic branch from `master`: `git branch my-new-topic origin/main`
- Add codes and pass tests !
- Commit your changes: `git commit -am 'Add some topic'`
- Push to the branch: `git push origin my-new-topic`
- Submit a pull request to `main` branch of `kazupon/textlint-rule-no-period-on-paragraph-end` repository !

## Development Setup

After cloning the repo, run:

```sh
npm install
```

### Lint

lint checks for the following:

- Prettier follows the format of this project
- ESLint follows the rules of this project

```sh
npm run lint
```

### Code Auto fix

The following commands fix those detected by Prettier and ESLint described earlier, using their respective fix functions.

```sh
npm run fix
```

### Build

Builds source codes for publish to the `lib` folder.

You can write ES2015+ source codes in `src/` folder.

```sh
npm run build
```

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester):

```sh
npm test
```

### Other script tasks

There are some other scripts available in the `scripts` section of the `package.json` file.
