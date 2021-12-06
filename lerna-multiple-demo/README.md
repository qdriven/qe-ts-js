# README

- leana commands
- [home](https://lerna.js.org/)

## lerna Commands Help

```sh
Usage: lerna <command> [options]

命令：
  lerna add <pkg> [globs..]  Add a single dependency to matched packages
  lerna bootstrap            Link local packages together and install remaining package dependencies
  lerna changed              List local packages that have changed since the last tagged release  [aliases: updated]
  lerna clean                Remove the node_modules directory from all packages
  lerna create <name> [loc]  Create a new lerna-managed package
  lerna diff [pkgName]       Diff all packages or a single package since the last release
  lerna exec [cmd] [args..]  Execute an arbitrary command in each package
  lerna import <dir>         Import a package into the monorepo with commit history
  lerna info                 Prints debugging information about the local environment
  lerna init                 Create a new Lerna repo or upgrade an existing repo to the current version of Lerna.
  lerna link                 Symlink together all packages that are dependencies of each other
  lerna list                 List local packages  [aliases: ls, la, ll]
  lerna publish [bump]       Publish packages in the current project.
  lerna run <script>         Run an npm script in each package that contains that script
  lerna version [bump]       Bump version of packages changed since the last release.

Global Options:
      --loglevel       What level of logs to report.  [字符串] [默认值: info]
      --concurrency    How many processes to use when lerna parallelizes tasks.  [数字] [默认值: 8]
      --reject-cycles  Fail if a cycle is detected among dependencies.  [布尔]
      --no-progress    Disable progress bars. (Always off in CI)  [布尔]
      --no-sort        Do not sort packages topologically (dependencies before dependents).  [布尔]
      --max-buffer     Set max-buffer (in bytes) for subcommand execution  [数字]
  -h, --help           显示帮助信息  [布尔]
  -v, --version        显示版本号  [布尔]

When a command fails, all logs are written to lerna-debug.log in the current working directory.

For more information, find our manual at https://github.com/lerna/lerna
```