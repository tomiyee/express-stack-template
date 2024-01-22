# Adding Utility Packages

Follow these steps to add a new package to the monorepo. 

## 1. Prepare the New Package Workspace

To add a new package to the mono repo, create and initialize it using the following commands.

```bash
mkdir <package-name>
cd <package-name>
# I like to keep all code inside of a /src directory
mkdir src
pnpm init
pnpm install typescript -D
# If relevant to the package
pnpm install react
```

## 2. Configure Typescript

Next, add a new `tsconfig.json` that extends the base tsconfig with the following contents:
```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

## 3. Configure the Package.json

Update the `package.json` to include the entry point

```json
{
  // ...  
  "main": "dist/index.js",
  "scripts": {
    "build": "rm -rf dist && tsc"
  },
}
```

# Using Utility Packages

To import a package into any workspace, run the following command in the root of the monorepo.

```bash
pnpm --filter <target-workspace> add <target-package> --workspace
```