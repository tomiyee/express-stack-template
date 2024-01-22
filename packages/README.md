# Adding Utility Packages

1. Create a new directory with the name you want for the package. 
2. Inside of the directory, run `pnpm init`
3. Install typescript as a dev dependency with `pnpm install tyepscript -D `
4. If necessary, install react with `pnpm install react`
5. Create a `tsconfig.json` that extends `tsconfig.base.json`
6. Add a build script to the package.json

To add it as a new dependency, run the command

```
pnpm --filter <target-workspace> add <target-package> --workspace
```