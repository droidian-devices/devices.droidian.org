# Droidian react client

## Available Scripts

In the project directory, you can run:

### `npm run start` / `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3005](http://localhost:3005) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Prepare environment

This will update husky ( git hooks ), which run after commit, cleaning your app from possible eslint errors and breaking
commit process if any error occur

```shell
npm run prepareHooks / yarn prepareHooks
chmod +x .husky/pre-commit
```
