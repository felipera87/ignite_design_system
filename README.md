This is a monorepo with a sample of a design system. Just for study, and to have a nice template of a project.
You have to build all packages before using it.

this is how docs package (storybook) was initialized:
```
# on docs folder
npx sb init --builder vite --type react --use-npm
``` 

This project is deployed with gh-pages, check it [here](https://felipera87.github.io/ignite_design_system/?path=/docs/home--docs)
The CI/CD for gh-pages uses Vercel caching with TurboRepo, so you need to set up these keys on the repository:
- NPM_TOKEN: get one from your NPM account, don't forget that npm organization must match the same with the package names
- VERCEL_TOKEN: get it from your Vercel account
- VERCEL_TEAM: if you use hobby account you can use your username

Every time you change something from a package you need to generate a new version of that package, you can use changeset for that:
```
npm run changeset

# fill all cli questions
```
This is just to generate a markdown file on .changeset with a random name, that file will be used in the next step so you can change this file, like changing major to minor when generating a new version.

After that you need to update all versions from changed packages:
```
npm run version-packages
```
This will fix all version for all packages using the file generated on the previous step (the file is deleted after the fix). A package can only be released if the version is different from the one hosted on NPM.

The release script is used by the CI/CD flow on gh-pages, so no need to run it manually. After pushing to master it should release the newer version to NPM and cache it on Vercel, also gh-pages will generate the updated Storybook page.